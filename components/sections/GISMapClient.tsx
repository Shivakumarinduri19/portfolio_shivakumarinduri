"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function GISMapClient() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Center on Telangana/Hyderabad region
    const lng = 78.8;
    const lat = 17.8;
    const zoom = 6.5;

    // Use an inline raster style to prevent fetch failures for external GL JSON styles
    const darkMatterStyle = {
      version: 8,
      sources: {
        "cartodb-dark": {
          type: "raster",
          tiles: [
            "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            "https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
          ],
          tileSize: 256,
          attribution: "© OpenStreetMap contributors, © CARTO"
        }
      },
      layers: [
        {
          id: "cartodb-dark-layer",
          type: "raster",
          source: "cartodb-dark",
          minzoom: 0,
          maxzoom: 20
        }
      ]
    };

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: darkMatterStyle as any,
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    // Add markers for projects
    projects.forEach((project) => {
      if (!project.location) return;

      const { lat: pLat, lng: pLng, label } = project.location;

      // Create a custom glow-cyan marker element
      const el = document.createElement("div");
      el.className = "custom-map-marker";
      el.style.width = "18px";
      el.style.height = "18px";
      el.style.borderRadius = "50%";
      el.style.background = "#00d4ff";
      el.style.border = "2px solid #030712";
      el.style.boxShadow = "0 0 10px #00d4ff, 0 0 20px #00d4ff";
      el.style.cursor = "pointer";
      el.style.transition = "transform 0.2s ease";

      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.3)";
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
      });

      // Create Popup content
      const popupHTML = `
        <div style="font-family: var(--font-sans), sans-serif; color: #f0f4ff;">
          <span style="font-size: 10px; font-weight: 600; text-transform: uppercase; color: #00ff88; letter-spacing: 0.05em;">
            ${project.category}
          </span>
          <h3 style="font-size: 14px; font-weight: 700; color: #ffffff; margin: 4px 0 2px 0; line-height: 1.2;">
            ${project.title}
          </h3>
          <p style="font-size: 11px; color: #94a3b8; margin: 0 0 8px 0; line-height: 1.3;">
            ${label}
          </p>
          <button 
            id="popup-btn-${project.slug}"
            style="width: 100%; text-align: center; background: linear-gradient(135deg, #00d4ff, #0099cc); color: #000; font-size: 11px; font-weight: 600; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; transition: opacity 0.2s;"
          >
            View Project Details
          </button>
        </div>
      `;

      const popup = new maplibregl.Popup({ offset: 12, closeButton: false }).setHTML(popupHTML);

      // Create and add marker
      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([pLng, pLat])
        .setPopup(popup)
        .addTo(map.current!);

      // Route on popup button click
      popup.on("open", () => {
        const btn = document.getElementById(`popup-btn-${project.slug}`);
        if (btn) {
          btn.addEventListener("click", () => {
            router.push(`/projects/${project.slug}`);
          });
        }
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [router]);

  return (
    <div className="relative w-full h-full min-h-[480px]">
      <div ref={mapContainer} className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/[0.08]" />
      {/* Decorative overlay grids/scanners */}
      <div className="absolute top-4 left-4 p-3 glass-card rounded-xl border border-cyan-400/20 text-xs font-mono pointer-events-none space-y-1">
        <div className="flex items-center gap-1.5 text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          GIS GEO-PORTAL ACTIVE
        </div>
        <div className="text-slate-400">Projection: EPSG:3857</div>
        <div className="text-slate-400">Base: CARTO Dark Matter</div>
      </div>
    </div>
  );
}

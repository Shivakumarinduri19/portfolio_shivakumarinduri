"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";
import { MapPin, Navigation, Compass } from "lucide-react";

export default function GISMapClient() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Center on Telangana / Hyderabad region
    const lng = 78.4867;
    const lat = 17.3850;
    const zoom = 6.8;

    const darkMatterStyle = {
      version: 8,
      sources: {
        "cartodb-dark": {
          type: "raster",
          tiles: [
            "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
            "https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
          ],
          tileSize: 256,
          attribution: "© OpenStreetMap contributors, © CARTO",
        },
      },
      layers: [
        {
          id: "cartodb-dark-layer",
          type: "raster",
          source: "cartodb-dark",
          minzoom: 0,
          maxzoom: 20,
        },
      ],
    };

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: darkMatterStyle as maplibregl.StyleSpecification,
      center: [lng, lat],
      zoom: zoom,
      pitch: 45,
      bearing: -15,
      attributionControl: false,
    });

    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
      }),
      "top-right"
    );

    // Add project markers
    projects.forEach((project) => {
      if (!project.location) return;

      const { lat: pLat, lng: pLng, label } = project.location;

      // Custom pulsing marker element
      const el = document.createElement("div");
      el.className = "group cursor-pointer";
      el.innerHTML = `
        <div style="position: relative; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; inset: 0; border-radius: 50%; background: rgba(0, 240, 255, 0.4); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
          <div style="position: relative; width: 14px; height: 14px; border-radius: 50%; background: #00f0ff; border: 2px solid #030712; box-shadow: 0 0 12px #00f0ff;"></div>
        </div>
      `;

      const popupHTML = `
        <div style="font-family: inherit; padding: 4px;">
          <span style="display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; color: #10b981; font-family: monospace; letter-spacing: 0.05em;">
            ${project.category}
          </span>
          <h4 style="font-size: 14px; font-weight: 800; color: #ffffff; margin: 4px 0 2px 0; line-height: 1.2;">
            ${project.title}
          </h4>
          <p style="font-size: 11px; color: #94a3b8; margin: 0 0 10px 0;">
            📍 ${label}
          </p>
          <button 
            id="map-btn-${project.slug}"
            style="width: 100%; background: linear-gradient(135deg, #00f0ff, #00b4d8); color: #030712; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 6px; border: none; cursor: pointer;"
          >
            View Project Details →
          </button>
        </div>
      `;

      const popup = new maplibregl.Popup({ offset: 16, closeButton: true }).setHTML(popupHTML);

      new maplibregl.Marker({ element: el })
        .setLngLat([pLng, pLat])
        .setPopup(popup)
        .addTo(map.current!);

      popup.on("open", () => {
        const btn = document.getElementById(`map-btn-${project.slug}`);
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
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
      <div ref={mapContainer} className="absolute inset-0 w-full h-full" />

      {/* High-tech Overlay Telemetry Badge */}
      <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#030712]/80 backdrop-blur-md border border-cyan-400/20 text-xs font-mono space-y-1 pointer-events-none">
        <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          GEO-PORTAL ENGINE ACTIVE
        </div>
        <div className="text-slate-400 text-[10px]">REGION: TELANGANA & HYDERABAD</div>
        <div className="text-slate-400 text-[10px]">CRS: EPSG:4326 (WGS 84)</div>
      </div>
    </div>
  );
}

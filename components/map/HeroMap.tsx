"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function HeroMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Center on Hyderabad
    const startLng = 78.4744;
    const startLat = 17.3753;
    const startZoom = 13.5;

    const darkMatterStyle = {
      version: 8,
      sources: {
        "cartodb-dark": {
          type: "raster",
          tiles: [
            "https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
            "https://b.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
            "https://c.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
            "https://d.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png",
          ],
          tileSize: 256,
          attribution: "© OpenStreetMap, © CARTO",
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
      center: [startLng, startLat],
      zoom: startZoom,
      pitch: 65,
      bearing: -30,
      interactive: false,
      attributionControl: false,
    });

    let animationFrameId: number;
    let currentBearing = -30;

    const rotateCamera = () => {
      if (map.current) {
        currentBearing += 0.04;
        map.current.setBearing(currentBearing);
        animationFrameId = requestAnimationFrame(rotateCamera);
      }
    };

    map.current.on("load", () => {
      rotateCamera();
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <div ref={mapContainer} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Gradient blends for cinematic depth */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none" />
    </div>
  );
}

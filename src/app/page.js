"use client";
import { MapProvider } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Weather from "./weather";

export default function Home() {
  return (
    <MapProvider>
      <Weather />
    </MapProvider>
  );
}

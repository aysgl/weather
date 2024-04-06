"use client";
import Weather from "../pages/weather";
import { WeatherProvider } from "@/context/WeatherContext";

export default function Home() {
  return (
    <WeatherProvider>
      <Weather />
    </WeatherProvider>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import { getWeatherData } from "@/utils/api";
import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Miami");

  useEffect(() => {
    getWeatherData(city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, getWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

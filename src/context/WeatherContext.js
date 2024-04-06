/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { getWeatherData } from "@/utils/api";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Miami");
  const [data, setData] = useState(null);

  useEffect(() => {
    getWeatherData(city)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.error(err));
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, data, setData }}>
      {children}
    </WeatherContext.Provider>
  );
};

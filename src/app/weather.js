/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Map from "react-map-gl";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Istanbul");
  // const key = process.env.REACT_APP_WEATHER_API_KEY;
  const key = "dd64e5a5dc99aaaaee614fe43df4fe66";
  const token =
    "pk.eyJ1IjoiYXlzZ2wiLCJhIjoiY2x1bjh5d2lvMWNtNzJpbGl2NW94MTBrOSJ9.oEQejjrSt5nCT8LpHodT_w";

  const getWeatherData = async (city) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(city);
    setCity("");
  };

  console.log(data);

  const getWeather = (descriptions) => {
    if (descriptions?.includes("broken-clouds")) {
      return "bg-gradient-to-r from-cyan-500 to-blue-500";
    } else if (descriptions?.includes("scattered clouds")) {
      return "bg-gradient-to-r from-sky-500 to-indigo-500";
    } else if (descriptions?.includes("clear sky")) {
      return "bg-gradient-to-r from-violet-500 to-fuchsia-500";
    } else if (descriptions?.includes("light rain")) {
      return "bg-gradient-to-r from-sky-500 to-emerald-500";
    } else {
      return "bg-gradient-to-r from-purple-500 to-pink-500";
    }
  };

  useEffect(() => {
    getWeatherData(city);
  }, [city]);

  return (
    <main
      className={`bg-fixed min-h-screen flex-col items-center justify-between md:p-24 p-12 ${getWeather(
        data?.weather?.map((w) => w.description)
      )}`}
    >
      {data?.weather?.map((w, i) => (
        <div className="w-100 ms-auto" key={i}>
          <img
            className="ms-auto"
            src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
            alt=""
          />
        </div>
      ))}
      <form className="max-w-md mb-10" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="outline-none block w-full p-4 ps-10 text-sm text-white border border-white-300 rounded-lg bg-transparent"
            // placeholder="Search Mockups, Logos..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none bg-white-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <div>
          <h1 className="text-6xl font-thin mb-4">
            {data?.name}{" "}
            <span className="text-4xl font-thin">
              {data?.weather[0]?.description}
            </span>
          </h1>

          <h2 className="text-8xl font-thin mb-10">
            {data?.main?.temp.toFixed(2)}
          </h2>

          {data && (
            <div className="flex gap-5">
              <div className="border rounded-lg w-[450px]">
                <Map
                  mapboxApiAccessToken={token}
                  // mapStyle="mapbox://styles/mapbox/streets-v9"
                  initialViewState={{
                    longitude: data?.coord?.lat || 0,
                    latitude: data?.coord?.lon || 0,
                    zoom: 4.5,
                  }}
                  style={{ width: 450, height: 250 }}
                />
              </div>
              <div className="border p-4 rounded-lg w-[200px]">
                <p>Humidity: {data?.main.humidity}</p>
                <p>Pressure: {data?.main.pressure}</p>
                <p>Temp Max: {data?.main.temp_max}</p>
                <p>Temp Min: {data?.main.temp_min}</p>
              </div>
              <div className="border p-4 rounded-lg w-[200px]">
                <p>Speed: {data?.wind.speed}</p>
                <p>Deg: {data?.wind.deg}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

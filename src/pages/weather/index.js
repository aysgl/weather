import React, { useContext, useState } from "react";
import { format } from "date-fns";
import SearchBar from "@/components/SearchBar";
import { formatTemperature, getWeather } from "@/utils/contants";
import { WeatherContext } from "@/context/WeatherContext";
import Link from "next/link";
import { getWeatherData } from "@/utils/api";

export default function Weather() {
  const { city, setCity } = useContext(WeatherContext);
  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(city)
      .then((res) => {
        setData(res);
        setCity("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <main
      className={`bg-fixed bg-opacity-50 min-h-screen flex-col items-center justify-between md:p-20 p-12`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${getWeather(
          data?.weather?.map((w) => w.description)
        )}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SearchBar onSubmit={handleSubmit} />
      <div className="mb-6">
        <p className="mb-2 text-xs">Random City</p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/weather/[city]"
            as={"/weather/New York"}
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            New York
          </Link>
          <Link
            href="/weather/[city]"
            as="/weather/London"
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            London
          </Link>
          <Link
            href="/weather/[city]"
            as="/weather/Dubai"
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            Dubai
          </Link>
          <Link
            href="/weather/[city]"
            as="/weather/Phuket"
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            Phuket
          </Link>
          <Link
            href="/weather/[city]"
            as="/weather/Endonasian"
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            Endonasian
          </Link>
          <Link
            href="/weather/[city]"
            as="/weather/Tokyo"
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            Tokyo
          </Link>
          <Link
            href="/weather/[city]"
            as="/weather/Japanese"
            className="bg-white bg-opacity-20 rounded px-3 py-2"
          >
            Japanese
          </Link>
        </div>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <div>
          <p>{format(new Date(), "'Today is ' MMMM d, yyyy")}</p>
          <h1 className="text-4xl font-bold mb-4">
            {data?.name}{" "}
            <span className="text-4xl font-thin me-3">
              {data?.weather?.map((w) => w.description)}
            </span>
          </h1>
          <h2 className="text-9xl font-thin mb-4">
            {formatTemperature(data?.main?.temp)}
          </h2>
        </div>
      </div>
    </main>
  );
}

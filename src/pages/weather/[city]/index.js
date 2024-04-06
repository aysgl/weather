import React from "react";
import Info from "@/components/Info";
import WeeklyForecast from "@/components/WeeklyForecast";
import { format } from "date-fns";
import "../../../app/globals.css";
import { getWeatherData } from "@/utils/api";
import {
  formatTemperature,
  getRandomTemperatureData,
  getWeather,
} from "@/utils/contants";

const WeatherDetail = ({ data, randomTemperatureData }) => {
  return (
    <main
      className={`bg-fixed bg-opacity-50 min-h-screen flex-col items-center justify-between md:p-20 p-12`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${getWeather(
          data?.weather?.map((w) => w?.description)
        )}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p>{format(new Date(), "'Today is ' MMMM d, yyyy")}</p>
      <h1 className="text-4xl font-bold mb-4">
        {data?.name}{" "}
        <span className="text-4xl font-thin me-3">
          {data?.weather?.map((w) => w?.description)}
        </span>
      </h1>
      <h2 className="text-9xl font-thin mb-4">
        {formatTemperature(data?.main?.temp)}
      </h2>
      <Info data={data} />
      <WeeklyForecast
        data={data}
        randomTemperatureData={randomTemperatureData}
      />
    </main>
  );
};

export default WeatherDetail;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { city } = query;

  try {
    const data = await getWeatherData(city);
    const randomTemperatureData = getRandomTemperatureData(7, data);
    return {
      props: { data, randomTemperatureData },
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return {
      props: { data: null, randomTemperatureData: null },
    };
  }
};

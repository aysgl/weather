import React from "react";
import { Lines } from "../components/Line";
import { formatTemperature } from "@/utils/contants";

const WeeklyForecast = ({ randomTemperatureData }) => {
  return (
    <div className="my-10">
      <Lines day={randomTemperatureData} />

      <ul className="flex flex-wrap gap-10 justify-between my-6">
        {randomTemperatureData?.map((day, index) => (
          <li key={index} className="sm:w-auto xs:w-1/2">
            <p className="text-5xl font-thin">
              {formatTemperature(day?.temperature)}
            </p>
            <p className="text-xs my-2">{day?.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;

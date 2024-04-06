import React from "react";
import { Lines } from "../components/Line";
import { formatTemperature, getRandomTemperatureData } from "@/utils/contants";
import { getWeatherData } from "@/utils/api";

const WeeklyForecast = ({ data, randomTemperatureData }) => {
  return (
    <div className="my-10">
      <Lines day={randomTemperatureData} />

      <ul className="flex flex-wrap gap-10 justify-around my-6">
        {randomTemperatureData?.map((day, index) => (
          <li key={index} className="sm:w-auto xs:w-1/2">
            <p className="text-5xl font-thin">
              {formatTemperature(day.temperature)}
            </p>
            <p className="text-xs my-2">{day.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyForecast;

// export const getServerSideProps = async () => {
//   try {
//     const city = "New York";
//     const data = await getWeatherData(city);
//     const randomTemperatureData = getRandomTemperatureData(7, data);

//     return {
//       props: {
//         data,
//         randomTemperatureData,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     return {
//       props: {
//         data: null,
//         randomTemperatureData: null,
//       },
//     };
//   }
// };

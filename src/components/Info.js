import React from "react";
import { formatTemperature } from "@/utils/contants";

const Info = ({ data }) => {
  return (
    <div className="flex gap-5">
      <div className="bg-white bg-opacity-20 p-4 rounded-lg w-[200px]">
        <p>humidity {data?.main?.humidity}</p>
        <p>pressure {data?.main?.pressure}</p>
      </div>
      <div className="bg-white bg-opacity-20 p-4 rounded-lg w-[200px]">
        <p>high {formatTemperature(data?.main?.temp_max)}</p>
        <p>low {formatTemperature(data?.main?.temp_min)}</p>
      </div>
      <div className="bg-white bg-opacity-20 p-4 rounded-lg w-[200px]">
        <p>speed {data?.wind?.speed}</p>
        <p>deg {data?.wind?.deg}</p>
      </div>
    </div>
  );
};

export default Info;

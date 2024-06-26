import React from "react";
import { format } from "date-fns";
import SearchBar from "@/components/SearchBar";
import { cityData, formatTemperature, getWeather } from "@/utils/contants";
import Link from "next/link";
import { getWeatherData } from "@/utils/api";

export default function Weather({ data }) {
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
      <SearchBar />

      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        {data && (
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
        )}
      </div>

      <div className="my-10">
        <p className="mb-4 text-xs">Random City</p>
        <div className="flex flex-wrap  gap-2">
          {cityData?.map((city) => (
            <Link key={city.id} href="/[city]" as={`/${city.slug}`}>
              <span className="bg-white bg-opacity-20 rounded px-3 py-2 block text-center">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const city = "Miami";
  try {
    const data = await getWeatherData(city);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
      errorMessage: error.message || "City not found",
    };
  }
}

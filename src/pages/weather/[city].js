import { useEffect, useState } from "react";
import Info from "@/components/Info";
import WeeklyForecast from "@/components/WeeklyForecast";
import { getWeatherData } from "@/utils/api";
import { useRouter } from "next/router";
import { formatTemperature, getWeather } from "@/utils/contants";
import "../../app/globals.css";
import { format } from "date-fns";

const WeatherDetail = ({ initialData }) => {
  const router = useRouter();
  const { city } = router.query;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getWeatherData(city);
      setData(newData);
    };
    if (!data) {
      fetchData();
    }
  }, [city, data]);

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
      <p>{format(new Date(), "'Today is ' MMMM d, yyyy")}</p>
      <h1 className="text-4xl font-bold mb-4">
        {city}{" "}
        <span className="text-4xl font-thin me-3">
          {data?.weather?.map((w) => w.description)}
        </span>
      </h1>
      <h2 className="text-9xl font-thin mb-4">
        {formatTemperature(data?.main?.temp)}
      </h2>
      <Info data={data} />
      <WeeklyForecast />
    </main>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { city } = query;
  const data = await getWeatherData(city);
  return {
    props: { initialData: data },
  };
};

export default WeatherDetail;

import { format, addDays, isToday, isTomorrow } from "date-fns";

export const getWeather = (descriptions) => {
  if (descriptions?.includes("broken-clouds")) {
    return "url('https://images.pexels.com/photos/14771510/pexels-photo-14771510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
  } else if (descriptions?.includes("scattered clouds")) {
    return "url('https://images.pexels.com/photos/18339547/pexels-photo-18339547/free-photo-of-scenic-view-of-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
  } else if (descriptions?.includes("overcast clouds")) {
    return "url('https://images.pexels.com/photos/18069722/pexels-photo-18069722/free-photo-of-landscape-of-high-rocky-mountains-under-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
  } else if (descriptions?.includes("broken clouds")) {
    return "url('https://images.pexels.com/photos/4338092/pexels-photo-4338092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
  } else if (descriptions?.includes("few clouds")) {
    return "url('https://images.pexels.com/photos/18336536/pexels-photo-18336536/free-photo-of-boats-of-fishermen-anchored-by-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
  } else if (descriptions?.includes("clear sky")) {
    return "url('https://images.pexels.com/photos/998660/pexels-photo-998660.jpeg')";
  } else if (descriptions?.includes("light intensity shower rain")) {
    return "url('https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
  } else if (descriptions?.includes("light rain")) {
    return "url('https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg')";
  } else if (descriptions?.includes("moderate rain")) {
    return "url('https://images.pexels.com/photos/5198485/pexels-photo-5198485.jpeg')";
  } else if (descriptions?.includes("dust")) {
    return "url('https://images.pexels.com/photos/14061016/pexels-photo-14061016.jpeg')";
  } else {
    return "bg-gradient-to-r from-purple-500 to-pink-500";
  }
};

export const formatTemperature = (temperature) => {
  if (temperature === undefined || temperature === null) {
    return "28°";
  }
  return `${temperature?.toString().slice(0, 2)}°`;
};

export const getRandomTemperatureData = (num, data) => {
  if (!data) {
    return [];
  }

  const minTemperature = data?.main?.temp_min - 2;
  const maxTemperature = data?.main?.temp_max + 2;
  const temperatureData = [];

  for (let i = 0; i < num; i++) {
    const date = addDays(new Date(), i);

    if (isToday(date)) {
      continue;
    }

    const dayName = isTomorrow(date) ? "Tomorrow" : format(date, "EEEE");
    temperatureData.push({
      date: dayName,
      temperature: Math.floor(
        Math.random() * (maxTemperature - minTemperature + 1) + minTemperature
      ),
    });
  }

  return temperatureData;
};

export const cityData = [
  { id: 1, name: "New York", slug: "new york" },
  { id: 2, name: "Los Angeles", slug: "los angeles" },
  { id: 3, name: "Chicago", slug: "chicago" },
  { id: 4, name: "Houston", slug: "houston" },
  { id: 5, name: "Phoenix", slug: "phoenix" },
  { id: 6, name: "Philadelphia", slug: "philadelphia" },
  { id: 7, name: "San Antonio", slug: "san-antonio" },
  { id: 8, name: "San Diego", slug: "san diego" },
  { id: 9, name: "Dallas", slug: "dallas" },
  { id: 10, name: "San Jose", slug: "san jose" },
  { id: 11, name: "Austin", slug: "austin" },
  { id: 12, name: "Jacksonville", slug: "jacksonville" },
  { id: 13, name: "Fort Worth", slug: "fort worth" },
  { id: 14, name: "Columbus", slug: "columbus" },
  { id: 15, name: "Charlotte", slug: "charlotte" },
  { id: 16, name: "San Francisco", slug: "san francisco" },
  { id: 17, name: "Indianapolis", slug: "indianapolis" },
  { id: 18, name: "Seattle", slug: "seattle" },
  { id: 19, name: "Denver", slug: "denver" },
  { id: 20, name: "Washington", slug: "washington" },
  { id: 21, name: "Boston", slug: "boston" },
  { id: 22, name: "El Paso", slug: "el-paso" },
  { id: 23, name: "Nashville", slug: "nashville" },
  { id: 24, name: "Las Vegas", slug: "las vegas" },
  { id: 25, name: "Portland", slug: "portland" },
  { id: 26, name: "Oklahoma City", slug: "oklahoma city" },
  { id: 27, name: "Tucson", slug: "tucson" },
  { id: 28, name: "Albuquerque", slug: "albuquerque" },
  { id: 29, name: "Atlanta", slug: "atlanta" },
  { id: 30, name: "Long Beach", slug: "long beach" },
  { id: 31, name: "Fresno", slug: "fresno" },
  { id: 32, name: "Sacramento", slug: "sacramento" },
  { id: 33, name: "Mesa", slug: "mesa" },
  { id: 34, name: "Kansas City", slug: "kansas city" },
  { id: 35, name: "Miami", slug: "miami" },
  { id: 36, name: "Raleigh", slug: "raleigh" },
  { id: 37, name: "Omaha", slug: "omaha" },
  { id: 38, name: "Minneapolis", slug: "minneapolis" },
  { id: 39, name: "Honolulu", slug: "honolulu" },
  { id: 40, name: "Colorado Springs", slug: "colorado springs" },
];

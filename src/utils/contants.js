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
  const minTemperature = data?.main.temp_min - 2;
  const maxTemperature = data?.main.temp_max + 2;
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

const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getWeatherData = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

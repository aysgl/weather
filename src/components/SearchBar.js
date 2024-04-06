import { WeatherContext } from "@/context/WeatherContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const SearchBar = ({ onSubmit }) => {
  const { city, setCity } = useContext(WeatherContext);
  const router = useRouter();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
    router.push(`/weather/${city}`);
  };

  return (
    <form className="max-w-md mb-6" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="outline-none block w-full p-4 ps-10 text-sm text-white border border-white-300 rounded-lg bg-transparent"
          value={city}
          onChange={handleChange}
          aria-label="input search"
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;

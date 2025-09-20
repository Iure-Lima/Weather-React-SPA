import { useEffect, useState } from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay.tsx";
import type { WeatherCardModel } from "./models/weather.car.model.ts";
import axios from "axios";
import type { WeatherApiResponse } from "./models/weather.api.response.ts";

function App() {
  const [themeApp, setThemeApp] = useState("light");
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherCardModel | null>(null);

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light");
  };

  const handleCityName = (cityName: string) => {
    setCityName(cityName);
  };

  const handleWeatherData = (data: WeatherCardModel) => {
    setWeatherData(data)
  }

  useEffect(() => {
    if (cityName) {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_KEY
          }&q=${cityName}&lang=pt`
        )
        .then((response) => {
          const weatherApiData: WeatherApiResponse = response.data;
          const newWeatherCardData: WeatherCardModel = {
            location: {
              name: weatherApiData.location.name,
              region: weatherApiData.location.region,
              country: weatherApiData.location.country,
              time_zone: weatherApiData.location.tz_id,
              local_time: weatherApiData.location.localtime
            },
            weather_information: {
              last_updated: weatherApiData.current.last_updated,
              temp_celsius: weatherApiData.current.temp_c,
              temp_fahrenheit: weatherApiData.current.temp_f,
              feelslike_celsius: weatherApiData.current.feelslike_c,
              feelslike_fahrenheit: weatherApiData.current.feelslike_f,
              is_day: weatherApiData.current.is_day,
              condition: weatherApiData.current.condition.text,
              condition_icon: weatherApiData.current.condition.icon,
              wind_mph: weatherApiData.current.wind_mph,
              wind_kph: weatherApiData.current.wind_kph,
              wind_dir: weatherApiData.current.wind_dir,
              humidity: weatherApiData.current.humidity,
              cloud: weatherApiData.current.cloud,
              uv: weatherApiData.current.uv
            }
          }
          handleWeatherData(newWeatherCardData)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cityName]);

  return (
    <main className={`${themeApp}`}>
      <header>
        <h1>Weather Panel</h1>
        <ThemeSwitcher callback={handleSwitcherThemeApp} />
      </header>
      <section className="container">
        <SearchBar callback={handleCityName} />
        <WeatherDisplay weatherData={weatherData} />
      </section>
    </main>
  );
}

export default App;

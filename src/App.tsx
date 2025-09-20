import { useEffect, useState } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.tsx'
import SearchBar from './components/SearchBar/SearchBar.tsx';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay.tsx';
import type { WeatherCardModel } from './models/weather.car.model.ts';
import axios from 'axios';

function App() {
  const [themeApp, setThemeApp] = useState("light");
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherCardModel | null>(null);
  
  const apiKey: string = import.meta.env.VITE_KEY;

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light")
  }

  const handleCityName = (cityName:string) => {
    setCityName(cityName);
  }

  useEffect(() => {
    console.log("oi")

  }, [cityName])

  const mockData: WeatherCardModel =  {
  location: {
    name: "Paris",
    region: "Ile-de-France",
    country: "France",
    time_zone: "Europe/Paris",
    local_time: "2025-09-19 19:19"
  },
  weather_information: {
    last_updated: "2025-09-19 19:15",
    temp_celsius: 30.1,
    temp_fahrenheit: 86.2,
    feelslike_celsius: 27.9,
    feelslike_fahrenheit: 82.2,
    is_day: 1,
    condition: "Sunny",
    condition_icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
    wind_mph: 4.3,
    wind_kph: 6.8,
    wind_dir: "S",
    humidity: 33,
    cloud: 0,
    uv: 0.2
  }
};

  return (
    <main className={`${themeApp}`}>
      <header>
        <h1>Weather Panel</h1>
        <ThemeSwitcher callback={handleSwitcherThemeApp} />
      </header>
      <section className='container'>
        <SearchBar callback={handleCityName} />
        <WeatherDisplay weatherData={weatherData}/>
      </section>
    </main>
  )
}

export default App

import { useState } from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher.tsx";

import Home from "./components/Home/Home.tsx";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails.tsx";
import About from "./components/About/About.tsx";

function App() {
  const [themeApp, setThemeApp] = useState("light");
  const [cityName, setCityName] = useState<string>("");

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light");
  };

  const handleCityName = (cityName: string) => {
    setCityName(cityName);
  };


  return (
    <main className={`${themeApp}`}>
      <header>
        <h1>Weather Panel</h1>
        <ThemeSwitcher callback={handleSwitcherThemeApp} />
      </header>
      <section className="container">
        <Home handleCity={handleCityName}/>
        <WeatherDetails/>
        <About/>
      </section>
    </main>
  );
}

export default App;

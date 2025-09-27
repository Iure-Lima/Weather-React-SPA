import { useState } from "react";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher.tsx";

import Home from "./components/Home/Home.tsx";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails.tsx";
import About from "./components/About/About.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const [themeApp, setThemeApp] = useState("light");
  const [cityName, setCityName] = useState<string>("");

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light");
  };

  const handleCityName = (cityName: string) => {
    setCityName(cityName);
    navigate(`/forecast/${cityName}`)
  };


  return (
    <main className={`${themeApp}`}>
      <header>
        <h1>Weather Panel</h1>
        <ThemeSwitcher callback={handleSwitcherThemeApp} />
      </header>
      <section className="container">
        <Routes>
          <Route path="/" element={<Home handleCity={handleCityName}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/forecast/:cityName" element={<WeatherDetails/>}/>
        </Routes>
      </section>
    </main>
  );
}

export default App;

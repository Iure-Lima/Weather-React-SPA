import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./AppLayout.css"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function AppLayout() {
  const navigate = useNavigate();
  const [themeApp, setThemeApp] = useState("light");

  const handleSwitcherThemeApp = () => {
    setThemeApp(themeApp === "light" ? "dark" : "light");
  };

  const handleCityName = (cityName: string) => {
    if (!cityName.trim()) return;
    navigate(`/forecast/${cityName}`);
  };

  return (
    <main className={`${themeApp}`}>
      <header>
        <h1>Weather Panel</h1>

        <nav style={{ display: "flex", gap: 16 }}>
          <NavLink to="/" end>
            Início
          </NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </nav>

        <ThemeSwitcher callback={handleSwitcherThemeApp} />
      </header>

      <section className="container">
        <Outlet context={{ handleCityName }} />
      </section>
    </main>
  );
}

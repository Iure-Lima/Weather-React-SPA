import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.css"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../../context/ThemeContext";

export default function AppLayout() {
  const navigate = useNavigate();
  const {themeApp} = useTheme();


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
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <ThemeSwitcher />
      </header>

      <section className="container">
        <Outlet context={{ handleCityName }} />
      </section>
    </main>
  );
}

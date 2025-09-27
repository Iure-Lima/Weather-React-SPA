import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
const WeatherDetails = lazy(() => import("./components/WeatherDetails/WeatherDetails.tsx"))
const About = lazy(() => import("./components/About/About.tsx"))
import AppLayout from "./components/AppLayout/AppLayout.tsx";

function App() {
  return (
    <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="forecast/:cityName" element={<WeatherDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
  );
}

export default App;

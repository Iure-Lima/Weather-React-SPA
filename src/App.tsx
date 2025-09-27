

import Home from "./components/Home/Home.tsx";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails.tsx";
import About from "./components/About/About.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
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

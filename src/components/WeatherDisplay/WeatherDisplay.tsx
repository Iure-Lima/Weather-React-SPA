import { useState } from "react";
import type { WeatherCardModel } from "../../models/weather.car.model";
import './WeatherDisplay.css'

function WeatherDisplay(props: {weatherData: WeatherCardModel | null} ){
  const [tempMetric, setTempMetric] = useState("cel")
  const [windMetric, setWindMetric] = useState("kph")

  const handleTempMetric = (temp:string) => {
    setTempMetric(temp)
  }

  const handleWindMetric = (wind:string) => {
    setWindMetric(wind)
  }


  return (
    <section className="weather-display">
      <article className="weather-card">
        <div className="card-header">
          <div>
            <h2>
            {props.weatherData?.location.name}
            </h2>
            <p>{props.weatherData?.location.region}</p>
          </div>
          <div>
            <p>{props.weatherData?.location.time_zone}</p>
            <p>{props.weatherData?.location.local_time}</p>
          </div>
        </div>

        <div className="card-body">
          <img src={props.weatherData?.weather_information.condition_icon} alt="weather icon" />
          <div>
            <h3>{tempMetric === "cel" ? `${props.weatherData?.weather_information.temp_celsius} °C` : `${props.weatherData?.weather_information.temp_fahrenheit} °F`}</h3>
            <p><strong>{props.weatherData?.weather_information.condition}</strong></p>
          </div>
        </div>

        <div className="card-information">
          <div className="information-data">
            <p>Feels Like {tempMetric === "cel" ? `${props.weatherData?.weather_information.feelslike_celsius} °C` : `${props.weatherData?.weather_information.feelslike_fahrenheit} °F`}</p>
          </div>
          <div className="information-data">
            <div className="btn-container">
              <button className={tempMetric === "cel" ? "activate" : ""} onClick={() => handleTempMetric("cel")}>C°</button>
              <button className={tempMetric === "fah" ? "activate" : ""} onClick={() => handleTempMetric("fah")}>F°</button>
            </div>
          </div>
          <div className="information-data">
            <p>Wind {windMetric === "kph" ? `${props.weatherData?.weather_information.wind_kph} KP/H` : `${props.weatherData?.weather_information.wind_mph} MP/H`}</p>
          </div>
          <div className="information-data">
            <div className="btn-container">
              <button className={windMetric === "mph" ? "activate" : ""} onClick={() => handleWindMetric("mph")}>mph</button>
              <button className={windMetric === "kph" ? "activate" : ""} onClick={() => handleWindMetric("kph")}>kpm</button>
            </div>
          </div>
          <div className="information-data column">
            <p>Humidity {props.weatherData?.weather_information.humidity}%</p>
          </div>
          <div className="information-data">
            <p>Cloud {props.weatherData?.weather_information.cloud}%</p>
          </div>
          <div className="information-data">
            <small>Last Updated: {props.weatherData?.weather_information.last_updated}</small>
          </div>
        </div>

      </article>
    </section>
  )
}

export default WeatherDisplay;
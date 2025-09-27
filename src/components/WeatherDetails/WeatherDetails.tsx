import { useState ,useEffect} from "react";
import type { WeatherCardModel } from "../../models/weather.car.model";
import "./WeatherDetails.css"
import { useParams } from "react-router-dom";
import type { WeatherApiResponse } from "../../models/weather.api.response";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import useFetch from "../../hooks/useFetch";

const API_BASE_URL = "http://api.weatherapi.com/v1/current.json";


function WeatherDetails(){
  const {cityName} = useParams()
  const weatherUrl = `${API_BASE_URL}?key=${
            import.meta.env.VITE_KEY
          }&q=${cityName}&lang=pt`

  const {data} = useFetch(weatherUrl)
  const [weatherData, setWeatherData] = useState<WeatherCardModel | null>(null);
  const handleWeatherData = (data: WeatherCardModel) => {
    setWeatherData(data)
  }

  useEffect(() => {
    const weatherApiData: WeatherApiResponse | null = data;
    if (weatherApiData){
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
    }
  }, [data]);
  return <>
    <WeatherDisplay weatherData={weatherData} />
  </>
}

export default WeatherDetails
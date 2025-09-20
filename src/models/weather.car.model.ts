import type { LocationModel } from "./location.model";
import type { WeatherModel } from "./weather.model";

export interface WeatherCardModel {
  location: LocationModel
  weather_information: WeatherModel
}
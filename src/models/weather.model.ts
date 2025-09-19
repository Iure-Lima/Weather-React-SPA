export interface WeatherModel {
  last_updated: string,
  temp_celsius: number,
  temp_fahrenheit: number,
  feelslike_celsius: number,
  feelslike_fahrenheit: number,
  is_day: number,
  condition: string,
  condition_icon: string,
  wind_mph: number,
  wind_kph: number,
  wind_dir: string,
  humidity: number,
  cloud: number,
  uv: number

}
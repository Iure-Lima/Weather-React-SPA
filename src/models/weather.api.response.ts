export interface WeatherApiResponse {
  location: Location;
  current: Current;
}

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;

  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;

  is_day: 0 | 1;
  condition: Condition;

  // Vento
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  gust_mph: number;
  gust_kph: number;

  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;

  humidity: number;
  cloud: number;
  vis_km: number;
  vis_miles: number;

  uv: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}
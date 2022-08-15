export interface wetherForecastInfo {
  location: string;
  created_at: number;
  list: List[];
}

interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  dt_txt: string;
}

interface Main {
  temp: number;
  pressure: number;
  sea_level: number;
  humidity: number;
}

interface Weather {
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  '3h': number;
}

export class WetherForecastInfo implements wetherForecastInfo {
  constructor(
    public location: string,
    public created_at: number,
    public list: List[],
  ) {}
}

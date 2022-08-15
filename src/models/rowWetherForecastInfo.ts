import { WetherForecastInfo } from './wetherForecastInfo';

export interface rowWetherForecastInfo {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
}

interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}

interface Sys {
  pod: string;
}

interface Rain {
  '3h': number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export class RowWetherForecastInfo implements rowWetherForecastInfo {
  constructor(
    public cod: string,
    public message: number,
    public cnt: number,
    public list: List[],
  ) {}

  createWetherForecastInfo(location: string): WetherForecastInfo {
    const list = this.list.map((elm) => {
      const main = {
        ...elm.main,
        feels_like: undefined,
        temp_min: undefined,
        temp_max: undefined,
        grnd_level: undefined,
        temp_kf: undefined,
      };

      const weather = {
        ...elm.weather,
        id: undefined,
      };

      const info = {
        dt: elm.dt,
        main: main,
        weather: weather,
        clouds: elm.clouds,
        wind: elm.wind,
        visibility: undefined,
        pop: undefined,
        rain: elm.rain,
        sys: undefined,
        dt_txt: elm.dt_txt,
      };

      return info;
    });

    return new WetherForecastInfo(location, Date.now(), list);
  }
}

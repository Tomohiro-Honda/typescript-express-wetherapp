import { WetherInfo } from './whetherInfo';

export interface rowWetherInfo {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Rain {
  '1h': number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}

export class RowWetherInfo implements rowWetherInfo {
  constructor(
    public coord: Coord,
    public weather: Weather[],
    public base: string,
    public main: Main,
    public visibility: number,
    public wind: Wind,
    public rain: Rain,
    public clouds: Clouds,
    public dt: number,
    public sys: Sys,
    public timezone: number,
    public id: number,
    public name: string,
    public cod: number,
  ) {}

  createWetherInfo = (location: string): WetherInfo => {
    const wether = {
      ...this.weather[0],
      id: undefined,
    };

    const main = {
      ...this.main,
      feels_like: undefined,
      temp_min: undefined,
      temp_max: undefined,
      grnd_level: undefined,
    };

    const sys = {
      ...this.sys,
      country: undefined,
    };

    return new WetherInfo(
      location,
      Date.now(),
      wether,
      main,
      this.wind,
      this.rain,
      sys,
    );
  };
}

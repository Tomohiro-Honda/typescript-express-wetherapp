interface wetherInfo {
  location: string;
  created_at: number;
  wether: wether;
  main: main;
  wind: wind;
  rain: rain;
  sys: sys;
}

interface wether {
  main: string;
  description: string;
  icon: string;
}

interface main {
  temp: number;
  pressure: number;
  humidity: number;
  sea_level: number;
}

interface wind {
  speed: number;
  deg: number;
  gust: number;
}

interface rain {
  '1h': number;
}

interface sys {
  sunrise: number;
  sunset: number;
}

export class WetherInfo implements wetherInfo {
  constructor(
    public location: string,
    public created_at: number,
    public wether: wether,
    public main: main,
    public wind: wind,
    public rain: rain,
    public sys: sys,
  ) {}
}

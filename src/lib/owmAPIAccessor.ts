import { fetch } from './fetchBase';
import { OWM_CONFIG } from '../config/owmconf';
import { plainToClass, ClassConstructor } from 'class-transformer';

export const apiFetcher = async <TI, TC>(
  baseURL: string,
  lat: string,
  lon: string,
  toClass: ClassConstructor<TC>,
): Promise<TC> => {
  const url = createURL(baseURL, lat, lon);
  const response = await fetch(url);
  const result = (await response.json()) as TI;
  const rowData = plainToClass(toClass, result);

  return rowData;
};

const createURL = (baseURL: string, lat: string, lon: string): URL => {
  const params = {
    lat: lat,
    lon: lon,
    appid: OWM_CONFIG.APIKEY,
  };

  const queryParams = new URLSearchParams(params);
  const apiURL = new URL(baseURL);
  queryParams.forEach((val, key) => {
    apiURL.searchParams.append(key, val);
  });

  return apiURL;
};

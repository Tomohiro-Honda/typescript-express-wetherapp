import { apiFetcher } from '../lib/owmAPIAccessor';
import { WetherInfo } from '../models/whetherInfo';
import { rowWetherInfo, RowWetherInfo } from '../models/rowWetherInfo';
import {
  RowWetherForecastInfo,
  rowWetherForecastInfo,
} from '../models/rowWetherForecastInfo';
import { isRefleshed } from '../lib/time';
import { OWM_CONFIG } from '../config/owmconf';
import { WetherForecastInfo } from '../models/wetherForecastInfo';

type apiGlobalData = {
  name: string;
  lat: string;
  lon: string;
  data: undefined | WetherInfo;
  forecast: undefined | WetherForecastInfo;
};

const apiDataList: apiGlobalData[] = [
  {
    name: 'miyake',
    lat: '34.0993287161',
    lon: '139.4916449743',
    data: undefined,
    forecast: undefined,
  },
];

export const getWetherDataService = async (
  location: string,
): Promise<WetherInfo | undefined | null> => {
  // url parameter check
  const index = apiDataList.findIndex((elm) => elm.name === location);
  if (index < 0) {
    return undefined;
  }

  const data = apiDataList[index].data;
  // Not refreshed, use cache data
  if (data === undefined || (data && isRefleshed(data.created_at))) {
    const baseURL = OWM_CONFIG.CURRENT_URL;
    const lat: string = apiDataList[index].lat;
    const lon: string = apiDataList[index].lon;

    const apiResult = await apiFetcher<rowWetherInfo, RowWetherInfo>(
      baseURL,
      lat,
      lon,
      RowWetherInfo,
    );

    apiDataList[index].data = apiResult.createWetherInfo(location);
  }

  return apiDataList[index].data;
};

export const getWetherForcastDataService = async (
  location: string,
): Promise<WetherForecastInfo | undefined | null> => {
  // url parameter check
  const index = apiDataList.findIndex((elm) => elm.name === location);
  if (index < 0) {
    return undefined;
  }

  const data = apiDataList[index].forecast;
  if (data === undefined || (data && isRefleshed(data.created_at, 3))) {
    const baseURL = OWM_CONFIG.FORCAST_URL;
    const lat: string = apiDataList[index].lat;
    const lon: string = apiDataList[index].lon;

    const apiResult = await apiFetcher<
      rowWetherForecastInfo,
      RowWetherForecastInfo
    >(baseURL, lat, lon, RowWetherForecastInfo);

    apiDataList[index].forecast = apiResult.createWetherForecastInfo(location);
  }

  return apiDataList[index].forecast;
};

/* eslint-disable @typescript-eslint/no-misused-promises */
import { RequestHandler } from 'express';
import {
  getWetherDataService,
  getWetherForcastDataService,
} from '../services/wetherService';

/* 天気情報取得*/

export const getWhetherInfo: RequestHandler<{ location: string }> = async (
  req,
  res,
  next,
) => {
  const location = req.params.location;

  const result = await getWetherDataService(location);

  if (result) {
    res.json({ data: result });
  } else if (result === undefined) {
    res.status(404).json({ message: `location "${location}" is not foud.` });
  } else {
    next(new Error(`server error`));
  }
};

export const getWhetherForecastInfo: RequestHandler<{
  location: string;
}> = async (req, res, next) => {
  const location = req.params.location;

  const result = await getWetherForcastDataService(location);

  if (result) {
    res.json({ data: result });
  } else if (result === undefined) {
    res.status(404).json({ message: `location "${location}" is not foud.` });
  } else {
    next(new Error(`server error`));
  }
};

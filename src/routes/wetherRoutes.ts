import { Router } from 'express';
import {
  getWhetherInfo,
  getWhetherForecastInfo,
} from '../controller/wetherController';

const router = Router();

router.get('/current/:location', getWhetherInfo);

router.get('/forecast/:location', getWhetherForecastInfo);

export default router;

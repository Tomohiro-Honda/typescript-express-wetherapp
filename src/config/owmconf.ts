import * as dotenv from 'dotenv';

dotenv.config().parsed;

export const OWM_CONFIG = {
  CURRENT_URL: process.env.OWN_CURRENT_BASEURL as string,
  FORCAST_URL: process.env.OWN_FORCAST_BASEURL as string,
  APIKEY: process.env.OWM_APIKEY as string,
};

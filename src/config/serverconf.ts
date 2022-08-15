import * as dotenv from 'dotenv';

dotenv.config().parsed;

export const SERVER_CONFIG = {
  PORT: Number(process.env.PORT as string),
  HOST: process.env.HOST as string,
};

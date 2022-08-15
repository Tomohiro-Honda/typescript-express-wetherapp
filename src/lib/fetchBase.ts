import { RequestInfo, RequestInit } from 'node-fetch';

export const fetch = (url: RequestInfo, init?: RequestInit) => {
  return import('node-fetch').then(({ default: fetch }) => fetch(url, init));
};

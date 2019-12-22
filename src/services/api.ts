import * as http from './http';
import * as config from 'config';

const httpClient = http.createHttpClient({
  url: config.API_ENDPOINT_HTTP,
  timeout: config.API_TIMEOUT,
});

const loadTopicsRequest = httpClient({
  path: '/',
  method: 'get',
});

export const loadTopics = (params: {
  appID: number;
  page: number;
  perPage: PerPage;
}) => loadTopicsRequest(params);

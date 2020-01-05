import cryptoRandomString from 'crypto-random-string';
import * as http from './http';
import * as config from 'config';


if (!sessionStorage.getItem('sessionID')) {
  sessionStorage.setItem('sessionID', cryptoRandomString({length: 16}));
}

const httpClient = http.createHttpClient({
  url: config.API_ENDPOINT_HTTP,
  timeout: config.API_TIMEOUT,
});

const loadTopicsRequest = (sessionID: number) =>
  httpClient({
    path: '/',
    method: 'get',
    headers: {
      'x-session-id': sessionID,
    },
  });

export const loadTopics = (sessionID, params: {
  appID: number;
  page: number;
  perPage: PerPage;
}) => loadTopicsRequest(sessionID)(params);

import axios from 'axios';

export const createHttpClient = (config: {
  host: string;
  timeout: number;
}) =>
    ({path, method}: {
      path: string;
      method: 'post' | 'get' | 'put';
    }) =>
      (params: any) =>
        axios({
          method,
          params,
          url: `${config.host}${path}`,
          timeout: config.timeout,
        })
          .then(result => [null, result])
          .catch(error => [error, null]);

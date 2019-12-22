import axios, {AxiosRequestConfig} from 'axios';

export const createHttpClient = (config: Pick<AxiosRequestConfig, 'url' | 'timeout'>) =>
    (options: {path: string} & Exclude<AxiosRequestConfig, 'url' | 'timeout'>) =>
      (params: any) =>
        axios({
          url: `${config.url}${options.path}`,
          timeout: config.timeout,
          ...options,
          params,
        })
          .then(result => [null, result])
          .catch(error => [error, null]);

export const API_ENDPOINT_HTTP =
  `${process.env.API_ENDPOINT_HTTP || `http://localhost:8080`}`;
export const API_ENDPOINT_WS =
  `${process.env.API_ENDPOINT_WS || `ws://localhost:8080`}`;
export const API_TIMEOUT = 1.5 * 60 * 1000;
export const PERPAGE: PerPage[] = [15, 30, 50];

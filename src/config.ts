export const API_LOCALPORT = 8080;
// export const API_ENDPOINT = `https://sdp-server.herokuapp.com`;
// export const API_WS_ENDPOINT = `wss://sdp-server.herokuapp.com`;
export const API_ENDPOINT = `http://localhost:${API_LOCALPORT}`;
export const API_WS_ENDPOINT = `ws://localhost:${API_LOCALPORT}`;
export const API_TIMEOUT = 1.5 * 60 * 1000;
export const PERPAGE: PerPage[] = [15, 30, 50];

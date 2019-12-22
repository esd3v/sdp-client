const createStatus = (params: Status) => params;

export const createErrorStatus = (message: string) =>
  createStatus({
    message,
    type: 'error',
  });

export const createNormalStatus = (message: string) =>
  createStatus({
    message,
    type: 'normal',
  });

export const createSuccessStatus = (message: string) =>
  createStatus({
    message,
    type: 'success',
  });

export const empty =
  createNormalStatus('');

export const couldntConnectToTheServer =
  createErrorStatus(`Couldn't connect to the server`);

export const appIDIsNotAnInteger =
  createErrorStatus(`'appID' must be an integer`);

export const pageIsNotAnInteger =
  createErrorStatus(`'page' must be an integer`);

export const websocketHasBeenLost =
  createErrorStatus('WebSocket connection has been lost. Reconnecting...');

export const websocketHasBeenOpened =
  createNormalStatus('WebSocket connection has been opened.');

export const websocketHasBeenRestored =
  createSuccessStatus('WebSocket connection has been restored.');

export const websocketUnableToConnect =
  createErrorStatus('Unable to connect to WebSocket server.');

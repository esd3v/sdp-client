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

export const empty = createStatus({
  message: '',
  type: 'normal',
});

export const couldntConnectToTheServer = createStatus({
  message: `Couldn't connect to the server`,
  type: 'error',
});

export const appIDIsNotAnInteger = createStatus({
  message: `'appID' must be an integer`,
  type: 'error',
});

export const pageIsNotAnInteger = createStatus({
  message: `'page' must be an integer`,
  type: 'error',
});

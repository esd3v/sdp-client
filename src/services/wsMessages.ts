const createMessage = (obj: {
  [key: string]: string | number | boolean;
}) => JSON.stringify(obj);

export const sessionID = (sessionID: string) =>
  createMessage({sessionID});

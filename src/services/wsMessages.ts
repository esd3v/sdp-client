const createMessage = (obj: {
  [key: string]: string | number | boolean;
}) => JSON.stringify(obj);

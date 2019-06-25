declare module '*.svg' {
  const content: any;
  export default content;
}

interface ReduxState {
  [key: string]: {
    [key in string]: {};
  };
}

interface Action {
  type: string;
}

interface ActionWithPayload<P = any> {
  type: string;
  payload: P;
}

type Thunk<T> = (params: T) =>
  (dispatch: any, getState?: any) =>
    Promise<void> | void;

interface AppStateChangers<AS> {
  [key: string]: (payload: any, state: AS) => {
    [key in keyof AS]?: AS[key];
  };
}

type HTTPGet<REQ, RES> = (params: REQ) => Promise<RES>;

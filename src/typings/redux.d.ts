declare module '*.svg' {
  const content: any;
  export default content;
}

interface AppState {
  global: {
    loading: boolean;
  };
  parser: {
    topics: Topic[];
    topicTotal: number;
    perPage: PerPage;
    pageTotal: number;
  };
}

// Core
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
type AppStateChanges<R extends keyof AppState> = {
  [key in keyof AppState[R]]?: AppState[R][key];
};

type AppStateChanger<R extends keyof AppState> =
  (options: {state: AppState[R]}) => AppStateChanges<R>;

type AppStateChangerWithPayload<R extends keyof AppState, P> =
  (options: {payload: P, state: AppState[R]}) => AppStateChanges<R>;

interface Action<R extends keyof AppState> {
  reducer: R;
  type: string;
  changer: AppStateChanger<R>;
}

interface ActionWithPayload<R extends keyof AppState, P> {
  reducer: R;
  type: string;
  payload: P;
  changer: AppStateChangerWithPayload<R, P>;
}

type Thunk<T> = (params: T) =>
  (dispatch: any, getState?: any) =>
    Promise<void> | void;

type HTTPGet<REQ, RES> = (params: REQ) => Promise<RES>;

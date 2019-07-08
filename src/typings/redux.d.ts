declare module '*.svg' {
  const content: any;
  export default content;
}

interface AppState {
  global: {
    topics: Topic[];
    topicTotal: number;
    perPage: PerPage;
    pageTotal: number;
    loading: boolean;
  };
}

// Core
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
// interface ReduxState {
//   [key: string]: {
//     [key in string]: {};
//   };
// }

type AppStateModule<M extends keyof AppState> = {
  [key in keyof AppState[M]]: AppState[M][key];
};

type AppStateChanges<M extends keyof AppState> = {
  [key in keyof AppState[M]]?: AppState[M][key];
};

type AppStateChanger<M extends keyof AppState> =
  (options: {state: AppState[M]}) => AppStateChanges<M>;

type AppStateChangerWithPayload<M extends keyof AppState, P> =
  (options: {payload: P, state: AppState[M]}) => AppStateChanges<M>;

interface Action<M extends keyof AppState> {
  module: M;
  type: string;
  changer: AppStateChanger<M>;
}

interface ActionWithPayload<M extends keyof AppState, P> {
  module: M;
  type: string;
  payload: P;
  changer: AppStateChangerWithPayload<M, P>;
}

type Thunk<T> = (params: T) =>
  (dispatch: any, getState?: any) =>
    Promise<void> | void;

type HTTPGet<REQ, RES> = (params: REQ) => Promise<RES>;

export const createReducer =
  <M extends keyof AppState>(name: keyof AppState, initialState: AppState[M]) =>
    (state = initialState, action: {
      module: M;
      type: string;
      payload?: any;
      changer: AppStateChangerWithPayload<M, any>;
    }) => {
      if (name) {
        if (name === action.module) {
          return {
            ...state,
            ...action.changer({
              state,
              payload: action.payload,
            }),
          };
      } else {
        return state;
      }
    }
  };

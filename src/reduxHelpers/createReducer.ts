export const createReducer =
  <R extends keyof AppState>(name: keyof AppState, initialState: AppState[R]) =>
    (state = initialState, action: {
      reducer: R;
      type: string;
      payload?: any;
      changer: AppStateChangerWithPayload<R, any>;
    }) => {
      if (name) {
        if (name === action.reducer) {
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

export const createAppStateModule = <R extends keyof AppState>(
  reducer: R,
  state: AppState[typeof reducer],
) => state;

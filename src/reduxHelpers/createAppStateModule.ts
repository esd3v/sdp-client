export const createAppStateModule = <M extends keyof AppState>(
  module: M,
  state: AppState[M],
) => state;

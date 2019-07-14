export function createAction<M extends keyof AppState, P>(
  action: ActionWithPayload<M, P>,
): ActionWithPayload<M, P>;

export function createAction<M extends keyof AppState>(
  action: Action<M>,
): Action<M>;

export function createAction<M extends keyof AppState, P>({
  module,
  type,
  payload,
  changer,
}: {
  module: M;
  type: string;
  payload?: P;
  changer: AppStateChangerWithPayload<M, P> | AppStateChanger<M>;
}) {
  return (payload === undefined) ? {
    module,
    type,
    changer,
  } : {
    module,
    type,
    payload,
    changer,
  };
}

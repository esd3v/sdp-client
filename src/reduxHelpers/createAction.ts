export function createAction<R extends keyof AppState, P>(
  action: ActionWithPayload<R, P>,
): ActionWithPayload<R, P>;

export function createAction<R extends keyof AppState>(
  action: Action<R>,
): Action<R>;

export function createAction<R extends keyof AppState, P>({
  reducer,
  type,
  payload,
  changer,
}: {
  reducer: R;
  type: string;
  payload?: P;
  changer: AppStateChangerWithPayload<R, P> | AppStateChanger<R>;
}) {
  return (payload === undefined) ? {
    reducer,
    type,
    changer,
  } : {
    reducer,
    type,
    payload,
    changer,
  };
}

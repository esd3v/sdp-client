export function createAction(type: string): Action;
export function createAction<P>(type: string, payload: P): ActionWithPayload<P>;
export function createAction<P>(type: string, payload?: P) {
  return (payload === undefined) ? {type} : {type, payload};
}

export const createReducer = (initialState: object, changers: object) =>
  (state: object = initialState, action: any): any => {
    const changer = changers[action.type];
    return (changer) ? {...state, ...changer(action.payload, state)} : state;
  };

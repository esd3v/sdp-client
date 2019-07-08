import {connect} from 'react-redux';
import * as redux from 'redux';
import * as Router from 'react-router-dom';
import * as thunks from 'store/global/thunks';
import * as actions from 'store/global/actions';

export const combineReducers = (reducers: {[key in keyof AppState]}) =>
  redux.combineReducers(reducers);

export const createAppStateModule = (
  module: keyof AppState,
  state: AppStateModule<typeof module>,
) => state;

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

export const createReducer =
  <M extends keyof AppState>(initialState: AppStateModule<M>) =>
    (state = initialState, action: {
      module: M;
      type: string;
      payload?: any;
      changer: AppStateChangerWithPayload<M, any>;
    }) => action.changer ? {
      ...state,
      ...action.changer({
        state,
        payload: action.payload,
      }),
    } : state;

export const createContainer = ({
  mapState = null,
  mapDispatch = null,
  component,
  withRouter = false,
}: {
  mapState?: ((state: AppState, ownProps?: object) => {
    [key in string]: any;
  }) | null;
  mapDispatch?: {
    actions: [keyof typeof actions],
    asyncActions: [keyof typeof thunks],
  } | {
    actions: [keyof typeof actions],
  } | {
    asyncActions: [keyof typeof thunks],
  } | null;
  component: any;
  withRouter?: boolean;
}) => {
  const createMappedActions = (arr: string[], actionsModule: object) =>
    arr.map(name => ({
      [name]: actionsModule[name],
    })).reduce((a, b) => ({...a, ...b}));

  const mapDispatchFinal = mapDispatch ?
    Object.keys(mapDispatch)
      .map(key => {
        const actionNames = mapDispatch[key];
        const actionModule = (key === 'actions') ? actions : thunks;
        return createMappedActions(actionNames, actionModule);
      })
      .flat()
      .filter(item => item)
      .reduce((a, b) => ({...a, ...b})) : null;

  const container = withRouter ?
    Router.withRouter(connect(mapState, mapDispatchFinal)(component)) :
    connect(mapState, mapDispatchFinal)(component);

  return container;
};

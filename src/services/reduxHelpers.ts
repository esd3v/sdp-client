import {connect} from 'react-redux';
import * as Router from 'react-router-dom';
import * as thunks from 'store/global/thunks';
import * as actions from 'store/global/actions';

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

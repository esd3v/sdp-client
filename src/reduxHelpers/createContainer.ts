import {RequireAtLeastOne} from 'type-fest';
import {connect} from 'react-redux';
import * as Router from 'react-router-dom';
import * as thunks from 'store/thunks';
import * as globalActions from 'store/global/actions';
import * as parserActions from 'store/parser/actions';

const actions = {
  global: globalActions,
  parser: parserActions,
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
  mapDispatch?: RequireAtLeastOne<{
    actions: RequireAtLeastOne<{
      [key in keyof AppState]: [keyof typeof actions[key]];
    }>,
    asyncActions: [keyof typeof thunks],
  }> | null;
  component: any;
  withRouter?: boolean;
}) => {
  const getActionNames = (reducer: string) =>
    mapDispatch && mapDispatch['actions'][reducer];

  const getAsyncActionNames = () =>
    mapDispatch && mapDispatch['asyncActions'];

  const getReducerNames = () =>
    mapDispatch && Object.keys(mapDispatch['actions']);

  const createMappedActions = (actionNames: string[], actionModule: object) =>
    actionNames.map(name => ({
      [name]: actionModule[name],
    })).reduce((a, b) => ({...a, ...b}));

  const mapDispatchFinal = mapDispatch ?
    Object.keys(mapDispatch)
      .map(key => {
        if (key === 'actions') {
          const reducerNames = getReducerNames();

          if (reducerNames) {
            for (const reducer of reducerNames) {
              const actionNames = getActionNames(reducer);
              return createMappedActions(actionNames, actions[reducer]);
            }
          }
        } else {
          const actionNames = getAsyncActionNames();
          return createMappedActions(actionNames, thunks);
        }
      })
      .flat()
      .filter(item => item)
      .reduce((a, b) => ({...a, ...b})) : null;

  const container = withRouter ?
    Router.withRouter(connect(mapState, mapDispatchFinal)(component)) :
    connect(mapState, mapDispatchFinal)(component);

  return container;
};
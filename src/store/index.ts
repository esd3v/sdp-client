import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {reducer as globalReducer} from './global/reducer';
import {combineReducers} from 'services/reduxHelpers';

const rootReducer = combineReducers({
  global: globalReducer,
});

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  devToolsEnhancer({
    trace: true,
  }),
));

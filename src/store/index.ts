import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import {reducer as globalReducer} from './global/reducer';
import {reducer as parserReducer} from './parser/reducer';
import {combineReducers} from 'helpers/redux';

const rootReducer = combineReducers({
  global: globalReducer,
  parser: parserReducer,
});

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  devToolsEnhancer({
    trace: true,
  }),
));

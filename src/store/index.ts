import thunk from 'redux-thunk';
import {reducer as globalReducer} from './global/reducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

const rootReducer = combineReducers({
  global: globalReducer,
});

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  devToolsEnhancer({
    trace: true,
  }),
));

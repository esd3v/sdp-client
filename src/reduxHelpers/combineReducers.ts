import * as redux from 'redux';

export const combineReducers = (reducers: {[key in keyof AppState]}) =>
  redux.combineReducers(reducers);

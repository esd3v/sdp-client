import {createReducer} from 'reduxHelpers';
import {state} from './state';

export const reducer = createReducer('parser', state);

import {createReducer} from 'helpers/redux';
import {state} from './state';

export const reducer = createReducer('parser', state);

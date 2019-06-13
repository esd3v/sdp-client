import {Arg1} from 'tsargs';
import * as types from './types';
import * as actions from './actions';
import {createReducer} from 'services/reduxHelpers';
import {state as initialState} from './state';

const changers: AppStateChangers<AppState['global']> = {
  [types.SET_URL]:
    (payload: Arg1<typeof actions['setURL']>) => ({
      url: payload,
    }),
  [types.SET_LOADING]:
    (payload: Arg1<typeof actions['setLoading']>) => ({
      loading: payload,
    }),
  [types.SET_PERPAGE]:
    (payload: Arg1<typeof actions['setPerPage']>) => ({
      perPage: payload,
    }),
  [types.SET_TOPICS]:
    (payload: Arg1<typeof actions['setTopics']>) => ({
      topics: payload,
  }),
  [types.SET_PAGETOTAL]:
    (payload: Arg1<typeof actions['setPageTotal']>) => ({
      pageTotal: payload,
    }),
  [types.SET_CURRENTPAGE]:
    (payload: Arg1<typeof actions['setCurrentPage']>) => ({
      currentPage: payload,
    }),
};

export const reducer = createReducer(initialState, changers);

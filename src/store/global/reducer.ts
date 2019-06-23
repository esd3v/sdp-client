import * as types from './types';
import * as actions from './actions';
import {createReducer} from 'services/reduxHelpers';
import {state as initialState} from './state';

const changers: AppStateChangers<AppState['global']> = {
  [types.SET_APPID]:
    (payload: Parameters<typeof actions['setAppID']>[0]) => ({
      appID: payload,
    }),
  [types.SET_LOADING]:
    (payload: Parameters<typeof actions['setLoading']>[0]) => ({
      loading: payload,
    }),
  [types.SET_PERPAGE]:
    (payload: Parameters<typeof actions['setPerPage']>[0]) => ({
      perPage: payload,
    }),
  [types.SET_TOPICS]:
    (payload: Parameters<typeof actions['setTopics']>[0]) => ({
      topics: payload,
  }),
  [types.SET_PAGETOTAL]:
    (payload: Parameters<typeof actions['setPageTotal']>[0]) => ({
      pageTotal: payload,
    }),
  [types.SET_CURRENTPAGE]:
    (payload: Parameters<typeof actions['setCurrentPage']>[0]) => ({
      currentPage: payload,
    }),
};

export const reducer = createReducer(initialState, changers);

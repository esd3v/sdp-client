import {createAction} from 'helpers/redux';

export const setLoading = (payload: AppState['global']['loading']) =>
  createAction({
    reducer: 'global',
    type: 'SET_LOADING',
    payload,
    changer: ({payload}) => ({
      loading: payload,
    }),
  });

export const setStatus = (payload: AppState['global']['status']) =>
  createAction({
    reducer: 'global',
    type: 'SET_STATUS',
    payload,
    changer: ({payload}) => ({
      status: payload,
    }),
  });

import {createAction} from 'reduxHelpers';

export const setLoading = (payload: boolean) =>
  createAction({
    module: 'global',
    type: 'SET_LOADING',
    payload,
    changer: ({payload}) => ({
      loading: payload,
    }),
  });

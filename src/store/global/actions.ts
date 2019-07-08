import {createAction} from 'services/reduxHelpers';

export const setLoading = (payload: boolean) =>
  createAction({
    module: 'global',
    type: 'SET_LOADING',
    payload,
    changer: ({payload}) => ({
      loading: payload,
    }),
  });

export const setPerPage = (payload: PerPage) =>
  createAction({
    module: 'global',
    type: 'SET_PERPAGE',
    payload,
    changer: ({payload}) => ({
      perPage: payload,
    }),
  });

export const setTopics = (payload: Topic[]) =>
  createAction({
    module: 'global',
    type: 'SET_TOPICS',
    payload,
    changer: ({payload}) => ({
      topics: payload,
    }),
  });

export const setPageTotal = (payload: number) =>
  createAction({
    module: 'global',
    type: 'SET_PAGETOTAL',
    payload,
    changer: ({payload}) => ({
      pageTotal: payload,
    }),
  });

export const setTopicTotal = (payload: number) =>
  createAction({
    module: 'global',
    type: 'SET_TOPICTOTAL',
    payload,
    changer: ({payload}) => ({
      topicTotal: payload,
    }),
  });

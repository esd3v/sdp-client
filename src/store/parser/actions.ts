import {createAction} from 'reduxHelpers';

export const setPerPage = (payload: PerPage) =>
  createAction({
    module: 'parser',
    type: 'SET_PERPAGE',
    payload,
    changer: ({payload}) => ({
      perPage: payload,
    }),
  });

export const setTopics = (payload: Topic[]) =>
  createAction({
    module: 'parser',
    type: 'SET_TOPICS',
    payload,
    changer: ({payload}) => ({
      topics: payload,
    }),
  });

export const setPageTotal = (payload: number) =>
  createAction({
    module: 'parser',
    type: 'SET_PAGETOTAL',
    payload,
    changer: ({payload}) => ({
      pageTotal: payload,
    }),
  });

export const setTopicTotal = (payload: number) =>
  createAction({
    module: 'parser',
    type: 'SET_TOPICTOTAL',
    payload,
    changer: ({payload}) => ({
      topicTotal: payload,
    }),
  });

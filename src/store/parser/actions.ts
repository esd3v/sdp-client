import {createAction} from 'helpers/redux';

export const setAppID = (payload: number) =>
  createAction({
    reducer: 'parser',
    type: 'SET_APPID',
    payload,
    changer: ({payload}) => ({
      appID: payload,
    }),
  });

export const setAppTitle = (payload: string) =>
  createAction({
    reducer: 'parser',
    type: 'SET_APPTITLE',
    payload,
    changer: ({payload}) => ({
      appTitle: payload,
    }),
  });

export const setTopics = (payload: Topic[]) =>
  createAction({
    reducer: 'parser',
    type: 'SET_TOPICS',
    payload,
    changer: ({payload}) => ({
      topics: payload,
    }),
  });

export const setPageTotal = (payload: number) =>
  createAction({
    reducer: 'parser',
    type: 'SET_PAGETOTAL',
    payload,
    changer: ({payload}) => ({
      pageTotal: payload,
    }),
  });

export const setTopicTotal = (payload: number) =>
  createAction({
    reducer: 'parser',
    type: 'SET_TOPICTOTAL',
    payload,
    changer: ({payload}) => ({
      topicTotal: payload,
    }),
  });

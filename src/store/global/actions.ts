import * as types from './types';
import {createAction} from 'services/reduxHelpers';

export const setAppID = (payload: number) =>
  createAction(types.SET_APPID, payload);

export const setLoading = (payload: boolean) =>
  createAction(types.SET_LOADING, payload);

export const setPerPage = (payload: PerPage) =>
  createAction(types.SET_PERPAGE, payload);

export const setTopics = (payload: Topic[]) =>
  createAction(types.SET_TOPICS, payload);

export const setPageTotal = (payload: number) =>
  createAction(types.SET_PAGETOTAL, payload);

export const setCurrentPage = (payload: number) =>
  createAction(types.SET_CURRENTPAGE, payload);

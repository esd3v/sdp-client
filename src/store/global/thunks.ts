import * as api from 'services/api';
import * as actions from './actions';

export const switchPerPage: Thunks['switchPerPage'] = perPage =>
  (dispatch, getState) => {
    const {global: {appID, topics}} = getState();
    dispatch(actions.setPerPage(perPage));
    if (topics.length) {
      dispatch(loadTopics({
        appID,
        page: 1,
        perPage,
      }));
    }
  };

export const loadTopics: Thunks['loadTopics'] = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();
    if (!loading) {
      dispatch(actions.setLoading(true));
      try {
        const {topics, pageTotal} = await api.loadTopics({appID, page, perPage});
        dispatch(actions.setAppID(appID));
        dispatch(actions.setTopics(topics));
        dispatch(actions.setPageTotal(pageTotal));
        dispatch(actions.setCurrentPage(page));
        dispatch(actions.setLoading(false));
      } catch {
        dispatch(actions.setLoading(false));
      }
    }
  };

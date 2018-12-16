import * as api from 'services/api';
import * as actions from './actions';

export const switchPerPage: Thunks['switchPerPage'] = perPage =>
  (dispatch, getState) => {
    const {global: {url, topics}} = getState();
    dispatch(actions.setPerPage(perPage));
    if (topics.length) {
      dispatch(loadTopics({
        url,
        page: 1,
        perPage,
      }));
    }
  };

export const loadTopics: Thunks['loadTopics'] = ({url, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();
    if (!loading) {
      dispatch(actions.setLoading(true));
      try {
        const {topics, pageTotal} = await api.loadTopics({url, page, perPage});
        dispatch(actions.setURL(url));
        dispatch(actions.setTopics(topics));
        dispatch(actions.setPageTotal(pageTotal));
        dispatch(actions.setLoading(false));
      } catch {
        dispatch(actions.setLoading(false));
      }
    }
  };

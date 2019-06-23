import * as api from 'services/api';
import * as actions from './actions';

export const loadTopics: Thunks['loadTopics'] = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();
    if (!loading) {
      dispatch(actions.setLoading(true));
      try {
        const {topics, pageTotal} = await api.loadTopics({appID, page, perPage});
        dispatch(actions.setTopics(topics));
        dispatch(actions.setPageTotal(pageTotal));
        dispatch(actions.setLoading(false));
      } catch {
        dispatch(actions.setLoading(false));
      }
    }
  };

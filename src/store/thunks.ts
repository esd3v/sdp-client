import * as api from 'services/api';
import {actions} from 'store/actions';

export const loadTopics: Thunks['loadTopics'] = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();
    if (!loading) {
      dispatch(actions.global.setLoading(true));
      try {
        const {
          topics,
          topicTotal,
          pageTotal,
        } = await api.loadTopics({appID, page, perPage});
        dispatch(actions.parser.setTopics(topics));
        dispatch(actions.parser.setPageTotal(pageTotal));
        dispatch(actions.parser.setTopicTotal(topicTotal));
        dispatch(actions.global.setLoading(false));
      } catch {
        dispatch(actions.global.setLoading(false));
      }
    }
  };

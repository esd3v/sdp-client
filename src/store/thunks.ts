import * as api from 'services/api';
import * as globalActions from 'store/global/actions';
import * as parserActions from 'store/parser/actions';

export const loadTopics: Thunks['loadTopics'] = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();
    if (!loading) {
      dispatch(globalActions.setLoading(true));
      try {
        const {
          topics,
          topicTotal,
          pageTotal,
        } = await api.loadTopics({appID, page, perPage});
        dispatch(parserActions.setTopics(topics));
        dispatch(parserActions.setPageTotal(pageTotal));
        dispatch(parserActions.setTopicTotal(topicTotal));
        dispatch(globalActions.setLoading(false));
      } catch {
        dispatch(globalActions.setLoading(false));
      }
    }
  };

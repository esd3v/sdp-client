import * as api from 'services/api';
import {actions} from 'store/actions';

export const loadTopics: Thunks['loadTopics'] = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();
    if (!loading) {
      dispatch(actions.global.setLoading(true));
      try {
        const [error, result] = await api.loadTopics({appID, page, perPage});
        let statusMessage = `Couldn't connect to the server`;

        if (error) {
          if (error.response) {
            statusMessage = error.response.data.message;
          }
          dispatch(actions.global.setStatus({
            message: statusMessage,
            type: 'error',
          }));
        }
        dispatch(actions.parser.setTopics(result.data.topics));
        dispatch(actions.parser.setPageTotal(result.data.pageTotal));
        dispatch(actions.parser.setTopicTotal(result.data.topicTotal));
        dispatch(actions.global.setLoading(false));
      } catch {
        dispatch(actions.global.setLoading(false));
      }
    }
  };

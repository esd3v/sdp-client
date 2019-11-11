import * as api from 'services/api';
import {actions} from 'store/actions';

export const loadTopics: Thunks['loadTopics'] = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();

    if (!loading) {
      dispatch(actions.global.setLoading(true));
      dispatch(actions.global.setStatus({
        message: '',
        type: 'normal',
      }));

      try {
        const [error, result] = await api.loadTopics({appID, page, perPage});

        if (error) {
          if (error.response) {
            throw new Error(error.response.data.message);
          } else {
            throw new Error(`Couldn't connect to the server`);
          }
        }

        dispatch(actions.parser.setTopics(result.data.topics));
        dispatch(actions.parser.setPageTotal(result.data.pageTotal));
        dispatch(actions.parser.setTopicTotal(result.data.topicTotal));
        dispatch(actions.global.setLoading(false));
      } catch (err) {
        dispatch(actions.global.setLoading(false));
        dispatch(actions.global.setStatus({
          message: err.message,
          type: 'error',
        }));
      }
    }
  };

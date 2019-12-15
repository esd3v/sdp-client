import * as api from 'services/api';
import * as statuses from 'services/statuses';
import {actions} from 'store/actions';

export const loadTopics: Thunk<Parameters<typeof api.loadTopics>[0]> = ({appID, page, perPage}) =>
  async (dispatch, getState) => {
    const {global: {loading}} = getState();

    if (!loading) {
      dispatch(actions.global.setLoading(true));

      const [error, result] = await api.loadTopics({appID, page, perPage});

      if (error) {
        if (error.response) {
          dispatch(actions.global
            .setStatus(statuses
              .createErrorStatus(error.response.data.message)));
        } else {
          dispatch(actions.global.setStatus(statuses.couldntConnectToTheServer));
        }

        dispatch(actions.global.setLoading(false));
      } else {
        dispatch(actions.parser.setAppID(appID));
        dispatch(actions.parser.setAppTitle(result.data.appTitle));
        dispatch(actions.parser.setTopics(result.data.topics));
        dispatch(actions.parser.setPageTotal(result.data.pageTotal));
        dispatch(actions.parser.setTopicTotal(result.data.topicTotal));
        dispatch(actions.global.setLoading(false));
        dispatch(actions.global.setStatus(statuses.createNormalStatus(result.data.appTitle)));
      }
    }
  };

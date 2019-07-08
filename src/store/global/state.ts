import {createAppStateModule} from 'services/reduxHelpers';

export const state = createAppStateModule('global', {
  topics: [],
  topicTotal: 0,
  perPage: 15,
  pageTotal: 0,
  loading: false,
});

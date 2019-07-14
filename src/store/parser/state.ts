import {createAppStateModule} from 'reduxHelpers';

export const state = createAppStateModule('parser', {
  topics: [],
  topicTotal: 0,
  perPage: 15,
  pageTotal: 0,
});

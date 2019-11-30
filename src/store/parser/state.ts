import {createAppStateModule} from 'helpers/redux';

export const state = createAppStateModule('parser', {
  appID: 0,
  topics: [],
  topicTotal: 0,
  pageTotal: 0,
});

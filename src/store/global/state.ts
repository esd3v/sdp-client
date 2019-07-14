import {createAppStateModule} from 'reduxHelpers';

export const state = createAppStateModule('global', {
  loading: false,
});

import {createAppStateModule} from 'helpers/redux';

export const state = createAppStateModule('global', {
  loading: false,
  status: {
    type: 'normal',
    message: '',
  },
});

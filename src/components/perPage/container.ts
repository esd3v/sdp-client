import {createContainer} from 'reduxHelpers';
import {PerPage} from './perPage';

export const PerPageContainer = createContainer({
  mapDispatch: {
    actions: {
      parser: ['setPerPage'],
    },
  },
  component: PerPage,
});

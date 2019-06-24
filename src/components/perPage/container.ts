import {createContainer} from 'services/reduxHelpers';
import {PerPage} from './perPage';

export const PerPageContainer = createContainer({
  mapDispatch: {
    actions: ['setPerPage'],
  },
  component: PerPage,
});

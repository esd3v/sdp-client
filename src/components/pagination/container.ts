import {createContainer} from 'services/reduxHelpers';
import {Pagination} from './pagination';

export const PaginationContainer = createContainer({
  mapState: state => ({
    pageTotal: state.global.pageTotal,
  }),
  component: Pagination,
  withRouter: true,
});

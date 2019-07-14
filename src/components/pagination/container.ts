import {createContainer} from 'reduxHelpers';
import {Pagination} from './pagination';

export const PaginationContainer = createContainer({
  mapState: state => ({
    pageTotal: state.parser.pageTotal,
  }),
  component: Pagination,
  withRouter: true,
});

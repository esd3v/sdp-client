import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Pagination} from './pagination';

const mapState = (state: AppState) => ({
  pageTotal: state.global.pageTotal,
});

export const PaginationContainer = withRouter(connect(mapState)(Pagination));

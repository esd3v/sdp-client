import {connect} from 'react-redux';
import {Pagination} from './pagination';
import * as thunks from 'store/global/thunks';

const mapState = (state: AppState) => ({
  appID: state.global.appID,
  perPage: state.global.perPage,
  pageTotal: state.global.pageTotal,
  currentPage: state.global.currentPage,
});

const mapDispatch = {
  loadTopics: thunks.loadTopics,
};

export const PaginationContainer = connect(mapState, mapDispatch)(Pagination);

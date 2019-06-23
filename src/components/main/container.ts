import {connect} from 'react-redux';
import {Main} from './main';
import * as thunks from 'store/global/thunks';

const mapState = (state: AppState) => ({
  topics: state.global.topics,
  loading: state.global.loading,
  pageTotal: state.global.pageTotal,
  perPage: state.global.perPage,
});

const mapDispatch = {
  loadTopics: thunks.loadTopics,
};

export const MainContainer = connect(mapState, mapDispatch)(Main);

import {connect} from 'react-redux';
import {Main} from './main';

const mapState = (state: AppState) => ({
  topics: state.global.topics,
  loading: state.global.loading,
  pageTotal: state.global.pageTotal,
});

export const MainContainer = connect(mapState)(Main);

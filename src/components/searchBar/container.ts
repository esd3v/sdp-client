import * as thunks from 'store/global/thunks';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {SearchBar} from './searchBar';

const mapState = (state: AppState) => ({
  perPage: state.global.perPage,
});

const mapDispatch = {
  loadTopics: thunks.loadTopics,
};

export const SearchBarContainer = withRouter(connect(mapState, mapDispatch)(SearchBar));

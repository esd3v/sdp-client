import * as thunks from 'store/global/thunks';
import * as actions from 'store/global/actions';
import {connect} from 'react-redux';
import {SearchBar} from './searchBar';

const mapState = (state: AppState) => ({
  perPage: state.global.perPage,
});

const mapDispatch = {
  setAppID: actions.setAppID,
  loadTopics: thunks.loadTopics,
};

export const SearchBarContainer = connect(mapState, mapDispatch)(SearchBar);

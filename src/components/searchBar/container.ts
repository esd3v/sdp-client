import * as thunks from 'store/global/thunks';
import * as actions from 'store/global/actions';
import {connect} from 'react-redux';
import {SearchBar} from './searchBar';

const mapState = (state: AppState) => ({
  perPage: state.global.perPage,
});

const mapDispatch = {
  setURL: actions.setURL,
  loadTopics: thunks.loadTopics,
};

export const SearchBarContainer = connect(mapState, mapDispatch)(SearchBar);

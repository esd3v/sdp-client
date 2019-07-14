import {createContainer} from 'reduxHelpers';
import {SearchBar} from './searchBar';

export const SearchBarContainer = createContainer({
  mapState: state => ({
    perPage: state.parser.perPage,
  }),
  mapDispatch: {
    asyncActions: ['loadTopics'],
  },
  component: SearchBar,
  withRouter: true,
});

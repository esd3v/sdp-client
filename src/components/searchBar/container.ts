import {createContainer} from 'services/reduxHelpers';
import {SearchBar} from './searchBar';

export const SearchBarContainer = createContainer({
  mapState: state => ({
    perPage: state.global.perPage,
  }),
  mapDispatch: {
    asyncActions: ['loadTopics'],
  },
  component: SearchBar,
  withRouter: true,
});

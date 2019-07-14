import {createContainer} from 'reduxHelpers';
import {Main} from './main';

export const MainContainer = createContainer({
  mapState: state => ({
    loading: state.global.loading,
    topics: state.parser.topics,
    topicTotal: state.parser.topicTotal,
    pageTotal: state.parser.pageTotal,
    perPage: state.parser.perPage,
  }),
  mapDispatch: {
    asyncActions: ['loadTopics'],
  },
  component: Main,
});

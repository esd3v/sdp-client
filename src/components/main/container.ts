import {createContainer} from 'services/reduxHelpers';
import {Main} from './main';

export const MainContainer = createContainer({
  mapState: state => ({
    topics: state.global.topics,
    topicTotal: state.global.topicTotal,
    loading: state.global.loading,
    pageTotal: state.global.pageTotal,
    perPage: state.global.perPage,
  }),
  mapDispatch: {
    asyncActions: ['loadTopics'],
  },
  component: Main,
});

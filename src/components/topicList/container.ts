import {createContainer} from 'services/reduxHelpers';
import {TopicList} from './topicList';

export const TopicListContainer = createContainer({
  mapState: state => ({
    topics: state.global.topics,
    loading: state.global.loading,
  }),
  component: TopicList,
});

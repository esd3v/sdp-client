import {createContainer} from 'reduxHelpers';
import {TopicList} from './topicList';

export const TopicListContainer = createContainer({
  mapState: state => ({
    loading: state.global.loading,
    topics: state.parser.topics,
  }),
  component: TopicList,
});

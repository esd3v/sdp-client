import {connect} from 'react-redux';
import {TopicList} from './topicList';

const mapState = (state: AppState) => ({
  topics: state.global.topics,
  loading: state.global.loading,
});

export const TopicListContainer = connect(mapState)(TopicList);

import {connect} from 'react-redux';
import {TopicList} from './TopicList';

const mapState = (state: AppState) => ({
  topics: state.global.topics,
  loading: state.global.loading,
});

export const TopicListContainer = connect(mapState)(TopicList);

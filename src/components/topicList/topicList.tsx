import * as React from 'react';
import {useSelector} from 'react-redux';
import {Spinner} from 'components/spinner';
import {TopicItem} from 'components/topicItem';
import * as styles from './styles';

export const TopicList: React.FunctionComponent = () => {
  const loading = useSelector((state: AppState) => state.global.loading);
  const topics = useSelector((state: AppState) => state.parser.topics);

  return (
    <div className={styles.topicList}>
      {topics.map(topic =>
        <TopicItem
          key={`${topic.title}${topic.timestamp}`}
          topic={topic}
        />)}
    {(loading === true) && <Spinner full={true}/>}
    </div>
  );
};

import * as React from 'react';
import {TopicItem} from 'components/topicItem';
import * as styles from './styles';
import {Props} from './types';

export const TopicList: React.FunctionComponent<Props> = ({topics, children}) => (
  <div className={styles.topicList}>
  {
    topics.map(topic =>
      <TopicItem
        key={`${topic.title}${topic.timestamp}`}
        topic={topic}
      />)
  }
  {children}
  </div>
);

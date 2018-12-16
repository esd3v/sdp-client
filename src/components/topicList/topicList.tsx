import * as React from 'react';
import {Props} from './types';
import {Spinner} from 'components/spinner';
import {TopicItem} from 'components/topicItem';
import * as styles from './styles';

export const TopicList: React.SFC<Props> = props => (
  <div className={styles.topicList}>
    {props.topics.map(topic =>
      <TopicItem
        key={topic.timestamp}
        topic={topic}
      />)}
  {(props.loading === true) && <Spinner full={true}/>}
  </div>
);

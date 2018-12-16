import * as React from 'react';
import * as styles from './styles';
import {Props} from './types';
import {Spinner} from 'components/spinner';
import {PerPage} from 'components/perPage';
import {SearchBar} from 'components/searchBar';
import {TopicList} from 'components/topicList';
import {Pagination} from 'components/pagination';

export const Main: React.SFC<Props> = props => (
  <div className={styles.main}>
    <SearchBar />
    {(props.topics.length > 0) && <TopicList />}
    {(props.loading && props.topics.length <= 0) && <Spinner full={false}/>}
    <PerPage/>
    {(props.pageTotal > 0) && <Pagination pageCount={props.pageTotal}/>}
  </div>
);

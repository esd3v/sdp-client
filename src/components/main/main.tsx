import React, {
  FunctionComponent,
  useEffect,
  useCallback,
} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as thunks from 'store/thunks';
import {actions} from 'store/actions';
import {Spinner} from 'components/spinner';
import {Status} from 'components/status';
import {PerPage} from 'components/perPage';
import {SearchBar} from 'components/searchBar';
import {TopicList} from 'components/topicList';
import {Pagination} from 'components/pagination';
import {calculatePageCount} from 'misc';
import * as styles from './styles';
import * as config from '../../config';
import {usePrevious} from '../../hooks';

export const Main: FunctionComponent = () => {
  const history = useHistory();
  const {appID, page} = useParams();

  const perPage = useSelector((state: AppState) => state.parser.perPage);
  const prevPerPage = usePrevious(perPage);
  const prevPage = usePrevious(page);

  const dispatch = useDispatch();
  const loading = useSelector((state: AppState) => state.global.loading);
  const status = useSelector((state: AppState) => state.global.status);
  const topics = useSelector((state: AppState) => state.parser.topics);
  const topicTotal = useSelector((state: AppState) => state.parser.topicTotal);
  const pageTotal = useSelector((state: AppState) => state.parser.pageTotal);

  const setStatus = useCallback((message: string) =>
    dispatch(actions.global.setStatus({
      message,
      type: 'normal',
    })), [dispatch]);

  const updateTopics = useCallback((page: number) => {
    dispatch(thunks.loadTopics({
      appID: Number(appID),
      page: page || 1,
      perPage,
    }));
  }, [appID, dispatch, perPage]);

  useEffect(() => {
    const socket = new WebSocket(config.API_WS_ENDPOINT);

    socket.onmessage = event => setStatus(event.data);
  }, [setStatus]);

  // first launch
  useEffect(() => {
    if (appID) {
      if (!topics.length) {
        if (!page) {
          history.replace(`/app/${appID}/page/${page || 1}`);
          updateTopics(1);
        } else {
          updateTopics(Number(page));
        }
      }
    } else {
      history.replace('/');
    }
  }, [appID, history, page, topics, updateTopics]);

  // topics loaded via button for the first time
  useEffect(() => {
    if (topics.length && !page) {
      history.replace(`/app/${appID}/page/1`);
    }
  }, [topics, appID, history, page]);

  // page switching (history changes)
  useEffect(() => {
    if (page && (page !== prevPage)) {
      updateTopics(Number(page));
    }

  }, [page, prevPage, updateTopics]);

  // e.g. if on the last page when perPage is 15, then switch to perPage 50
  useEffect(() => {
    if (perPage !== prevPerPage) {
      const predictedPageCount = calculatePageCount({
        perPage,
        total: topicTotal,
      });

      if (Number(page) > predictedPageCount) {
        history.replace(`/app/${appID}/page/${predictedPageCount}`);
      } else {
        updateTopics(Number(page));
      }
    }
  }, [perPage, prevPerPage, appID, history, page, topicTotal, updateTopics]);

  return (
    <div className={styles.main}>
      <SearchBar />
      {
        status.message &&
        <Status message={status.message} type={status.type}/>
      }
      {
        (topics.length > 0) &&
        <TopicList />
      }
      {
        (loading && topics.length <= 0) &&
        <Spinner full={false}/>
      }
      <PerPage disabled={loading} />
      {
        (pageTotal > 0) &&
        <Pagination/>
      }
    </div>
  );
};

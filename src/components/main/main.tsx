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

let socket: WebSocket;
let appHasChanged: boolean;

const wsConnect = () =>
  socket = new WebSocket(config.API_WS_ENDPOINT);

wsConnect();

export const Main: FunctionComponent = () => {
  const history = useHistory();
  const {appID, page} = useParams();

  const perPage = useSelector((state: AppState) => state.parser.perPage);
  const prevPerPage = usePrevious(perPage);
  const prevPage = usePrevious(page);
  const prevAppID = usePrevious(appID);

  const dispatch = useDispatch();
  const loading = useSelector((state: AppState) => state.global.loading);
  const status = useSelector((state: AppState) => state.global.status);
  const topics = useSelector((state: AppState) => state.parser.topics);
  const topicTotal = useSelector((state: AppState) => state.parser.topicTotal);
  const pageTotal = useSelector((state: AppState) => state.parser.pageTotal);

  const prevTopics = usePrevious(topics);

  const setStatus = useCallback((message: string) =>
    dispatch(actions.global.setStatus({
      message,
      type: 'normal',
    })), [dispatch]);

  const loadTopics = useCallback((page: number) => {
    if (socket.readyState === 3) {
      wsConnect();
    }

    dispatch(thunks.loadTopics({
      appID: Number(appID),
      page: page || 1,
      perPage,
    }));
  }, [appID, dispatch, perPage]);

  socket.onopen = () =>
    socket.onmessage = event =>
      setStatus(event.data);

  // first launch
  useEffect(() => {
    if (appID) {
      // don't let perPage change trigger loadTopics with incorrect appID
      if (perPage === prevPerPage) {
        if (!topics.length) {
          loadTopics(!page ? 1 : Number(page));
        }
      }
    } else {
      history.replace('/');
    }
  }, [appID, history, page, topics, loadTopics, perPage, prevPerPage]);

  // if topics has finished loading
  useEffect(() => {
    if (topics !== prevTopics) {

      // topics loaded for the first time
      if (prevTopics && !prevTopics.length) {

        // topics loaded via button
        if (!page) {
          history.replace(`/app/${appID}/page/1`);
        }
      } else {
        if (appHasChanged) {
          history.replace(`/app/${appID}/page/1`);
        }
      }
      appHasChanged = false;
    }
  }, [topics, prevTopics, appID, history, page, prevAppID]);

  // topics loaded via button with different appID
  useEffect(() => {
    if (appID !== prevAppID) {
      loadTopics(1);
      appHasChanged = true;
    }
  }, [appID, prevAppID, loadTopics]);

  // page switching (history changes)
  useEffect(() => {
    if (page && (page !== prevPage)) {
      loadTopics(Number(page));
    }

  }, [page, prevPage, loadTopics, appID, prevAppID]);

  // e.g. if on the last page when perPage is 15, then switch to perPage 50
  useEffect(() => {
    if ((perPage !== prevPerPage) && Number(appID)) {
      const predictedPageCount = calculatePageCount({
        perPage,
        total: topicTotal,
      });

      if (Number(page) > predictedPageCount) {
        history.replace(`/app/${appID}/page/${predictedPageCount}`);
      } else {
        loadTopics(Number(page));
      }
    }
  }, [perPage, prevPerPage, appID, history, page, topicTotal, loadTopics]);

  return (
    <div className={styles.main}>
      <SearchBar/>
      {
        status.message &&
        <Status message={status.message} type={status.type}/>
      }
      {
        ((!topics.length && loading === true) || appHasChanged) &&
        <Spinner full={false}/>
      }
      {
        (topics.length > 0 && !appHasChanged) &&
        <TopicList topics={topics}>
        {
          (loading === true) &&
          <Spinner full={true}/>
        }
        </TopicList>
      }
      <PerPage disabled={loading}/>
      {
        (pageTotal > 0 && !appHasChanged) &&
        <Pagination/>
      }
    </div>
  );
};

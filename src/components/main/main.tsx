import React, {
  FunctionComponent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Helmet} from 'react-helmet';
import * as config from 'config';
import * as webSocket from 'webSocket';
import * as thunks from 'store/thunks';
import {actions} from 'store/actions';
import * as statuses from 'services/statuses';
import {Spinner} from 'components/spinner';
import {Status} from 'components/status';
import {PerPage} from 'components/perPage';
import {SearchBar} from 'components/searchBar';
import {TopicList} from 'components/topicList';
import {Pagination} from 'components/pagination';
import {calculatePageCount} from 'helpers/misc';
import * as styles from './styles';
import {usePrevious} from 'helpers/hooks';
import {sessionID} from 'services/wsMessages';

export const Main: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    page: routePage,
    appID: routeAppID,
  } = useParams();

  const appID = useSelector((state: AppState) => state.parser.appID);
  const appTitle = useSelector((state: AppState) => state.parser.appTitle);
  const loading = useSelector((state: AppState) => state.global.loading);
  const status = useSelector((state: AppState) => state.global.status);
  const topics = useSelector((state: AppState) => state.parser.topics);
  const topicTotal = useSelector((state: AppState) => state.parser.topicTotal);
  const pageTotal = useSelector((state: AppState) => state.parser.pageTotal);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState<PerPage>(15);

  const prevAppID = usePrevious(appID);
  const prevPage = usePrevious(page);
  const prevPerPage = usePrevious(perPage);
  const prevTopics = usePrevious(topics);

  const setStatus = useCallback(({message, type}: Status) =>
    dispatch(actions.global.setStatus({
      message,
      type,
    })), [dispatch]);

  const loadTopics = useCallback((params: {
    appID;
    page;
    perPage;
  }) => {
    const parsedAppID = Number(params.appID);
    const parsedPage = Number(params.page);

    if (!parsedAppID) {
      setStatus(statuses.appIDIsNotAnInteger);
    } else if (!parsedPage) {
      setStatus(statuses.pageIsNotAnInteger);
    } else {
      dispatch(thunks.loadTopics({
        appID: parsedAppID,
        page: parsedPage,
        perPage: params.perPage,
      }));
    }
  }, [dispatch, setStatus]);

  if (!webSocket.getSocket()) {
    webSocket.createSocket(config.API_ENDPOINT_WS, {
      reconnect: 5,
      keepAlive: 30,
      onClose: () => setStatus(statuses.websocketHasBeenLost),
      onOpen: ws => {
        setStatus(statuses.websocketHasBeenOpened);
        ws.send(sessionID(sessionStorage.getItem('sessionID') || ''));
      },
      onReconnect: ws => {
        setStatus(statuses.websocketHasBeenRestored),
        ws.send(sessionID(sessionStorage.getItem('sessionID') || ''));
      },
      onFail: () => setStatus(statuses.websocketUnableToConnect),
      onMessage: event => {
        const {type, message} = JSON.parse(event.data);

        if (type === 'progress') {
          setStatus({
            message,
            type: 'normal',
          });
        }
      },
    });
  }

  const handleSubmit = (appID: string) =>
    loadTopics({
      appID,
      page,
      perPage,
    });

  const handlePageChange = (page: number) =>
    setPage(page);

  const handlePerPageChange = (value: PerPage) =>
    setPerPage(value);

  // first launch
  useEffect(() => {
    if (routeAppID) {
      if (perPage === prevPerPage) {
        if (!topics.length) {
          setPage(Number(routePage) || 1);
        }
      }
    }
  }, [routeAppID, routePage, perPage, prevPerPage, topics, history, loadTopics]);

  useEffect(() => {
    if (topics !== prevTopics) {
      history.replace(`/app/${appID}/page/${page}`);
    }
  }, [topics, prevTopics, appID, history, page]);

  useEffect(() => {
    if (topics.length && (appID !== prevAppID)) {
      setPage(1);
    }
  }, [topics, prevTopics, appID, history, prevAppID]);

  useEffect(() => {
    if (topics.length && (page !== prevPage)) {
      loadTopics({appID, page, perPage});
    }
  }, [appID, page, prevPage, perPage, topics, loadTopics]);

  useEffect(() => {
    if (appID && (perPage !== prevPerPage)) {
      const predictedPageCount = calculatePageCount({
        perPage,
        total: topicTotal,
      });

      // e.g. if on the last page when perPage is 15, then switch to perPage 50
      if (page > predictedPageCount) {
        setPage(predictedPageCount);
      } else {
        loadTopics({appID, page, perPage});
      }
    }
  }, [perPage, prevPerPage, appID, page, topicTotal, loadTopics]);

  const ConditionalPagination =
    (pageTotal > 0) && <Pagination onSwitch={handlePageChange}/>;

  return (
    <div className={styles.main}>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <title>{`${`${appTitle && `${appTitle} - `}`}Steam Discussion Parser`}</title>
      </Helmet>
      <Status message={`${appTitle || `Steam Discussion Parser`}`}/>
      <SearchBar onSubmit={handleSubmit}/>
      {
        status.message &&
        <Status message={status.message} type={status.type}/>
      }
      {
        (!topics.length && loading === true) &&
        <Spinner full={false}/>
      }
      {ConditionalPagination}
      {
        (topics.length > 0) &&
        <TopicList topics={topics}>
        {
          (loading === true) &&
          <Spinner full={true}/>
        }
        </TopicList>
      }
      {ConditionalPagination}
      <PerPage onChange={handlePerPageChange}/>
    </div>
  );
};

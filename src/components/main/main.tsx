import * as React from 'react';
import * as config from '../../config';
import * as styles from './styles';
import {Props, State} from './types';
import {Spinner} from 'components/spinner';
import {PerPage} from 'components/perPage';
import {SearchBar} from 'components/searchBar';
import {TopicList} from 'components/topicList';
import {Pagination} from 'components/pagination';

export class Main extends React.Component<Props, State> {

  public state: State = {
    status: '',
    socket: null,
  };

  public componentDidMount() {
    const appID = parseInt(this.props.match.params.appID, 10);
    const page = parseInt(this.props.match.params.page, 10);
    const socket = new WebSocket(config.API_WS_ENDPOINT);

    socket.onmessage = event =>
      this.setState(() => ({
        status: event.data,
      }));

    if (appID) {
      this.props.loadTopics({
        appID,
        page: page || 1,
        perPage: this.props.perPage,
      });
    }
  }

  public componentDidUpdate(prevProps: Props) {
    const appID = parseInt(this.props.match.params.appID, 10);
    const currentPage = parseInt(this.props.match.params.page, 10);
    const prevPage = parseInt(prevProps.match.params.page, 10);
    const pageHasChanged = currentPage !== prevPage;
    const perPageHasChanged = prevProps.perPage !== this.props.perPage;

    if (pageHasChanged || perPageHasChanged) {
      this.props.loadTopics({
        appID,
        page: currentPage,
        perPage: this.props.perPage,
      });
    }
  }

  public render() {
    return (
      <div className={styles.main}>
        <SearchBar />
        {
          (this.props.topics.length > 0) &&
          <TopicList />
        }
        {
          (this.props.loading && this.props.topics.length <= 0) &&
          <Spinner status={this.state.status} full={false}/>
        }
        <PerPage/>
        {
          (this.props.pageTotal > 0) &&
          <Pagination/>
        }
      </div>
    );
  }
}

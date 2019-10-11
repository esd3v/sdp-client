import * as React from 'react';
import * as config from '../../config';
import * as styles from './styles';
import {Props, State} from './types';
import {calculatePageCount} from 'misc';
import {Spinner} from 'components/spinner';
import {Status} from 'components/status';
import {PerPage} from 'components/perPage';
import {SearchBar} from 'components/searchBar';
import {TopicList} from 'components/topicList';
import {Pagination} from 'components/pagination';

export class Main extends React.Component<Props, State> {

  public componentDidMount() {
    const appID = this.getAppID();
    const socket = new WebSocket(config.API_WS_ENDPOINT);

    socket.onmessage = event =>
      this.props.setStatus({
        message: event.data,
        type: 'normal',
      });

    // Load data on first load, even with no page selected
    if (appID) {
      if (isNaN(parseInt(appID, 10))) {
        this.props.setStatus({
          message: 'AppID must be a number',
          type: 'error',
        });
      } else {
        this.loadTopics(this.getCurrentPage() || 1);
      }
    }
  }

  public componentDidUpdate(prevProps: Props) {
    const appID = parseInt(this.getAppID(), 10);
    const selectedPage = this.getCurrentPage();

    // If topics has (just) been loaded
    if (this.props.topics.length) {
      // Check if first run
      if (!selectedPage) {
        this.props.history.replace(`/app/${appID}/page/1`);
      } else {
        const prevPage = parseInt(prevProps.match.params.page, 10);
        const pageHasChanged = selectedPage !== prevPage;
        const perPageHasChanged = prevProps.perPage !== this.props.perPage;

        if (pageHasChanged) {
          this.loadTopics(selectedPage);
        } else if (perPageHasChanged) {
          // e.g. on the last page if perPage is 15, then switch to perPage 50
          const predictedPageCount = calculatePageCount({
            perPage: this.props.perPage,
            total: this.props.topicTotal,
          });
          const isSelectedPageGreater = selectedPage > predictedPageCount;

          if (isSelectedPageGreater) {
            this.props.history.replace(`/app/${appID}/page/${predictedPageCount}`);
            this.loadTopics(isSelectedPageGreater ? predictedPageCount : selectedPage);
          } else {
            this.loadTopics(selectedPage);
          }
        }
      }
    }
  }

  public render() {
    return (
      <div className={styles.main}>
        <SearchBar />
        {
          this.props.status.message &&
          <Status message={this.props.status.message} type={this.props.status.type}/>
        }
        {
          (this.props.topics.length > 0) &&
          <TopicList />
        }
        {
          (this.props.loading && this.props.topics.length <= 0) &&
          <Spinner full={false}/>
        }
        <PerPage disabled={this.props.loading} />
        {
          (this.props.pageTotal > 0) &&
          <Pagination/>
        }
      </div>
    );
  }

  private getAppID = () =>
    this.props.match.params.appID

  private getCurrentPage = () =>
    parseInt(this.props.match.params.page, 10)

  private loadTopics = (page: number) =>
    this.props.loadTopics({
      appID: parseInt(this.getAppID(), 10),
      page,
      perPage: this.props.perPage,
    })
}

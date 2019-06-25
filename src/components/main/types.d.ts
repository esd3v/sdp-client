import {RouteComponentProps} from 'react-router-dom';

interface MatchParams {
  appID: string;
  page: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
  loadTopics: Thunks['loadTopics'];
  topics: AppState['global']['topics'];
  topicTotal: AppState['global']['topicTotal'];
  loading: AppState['global']['loading'];
  pageTotal: AppState['global']['pageTotal'];
  perPage: AppState['global']['perPage'];
}

export interface State {
  status: string;
  socket: any;
}

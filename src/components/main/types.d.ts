import {RouteComponentProps} from 'react-router-dom';

interface MatchParams {
  appID: string;
  page: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
  loadTopics: Thunks['loadTopics'];
  loading: AppState['global']['loading'];
  topics: AppState['parser']['topics'];
  topicTotal: AppState['parser']['topicTotal'];
  pageTotal: AppState['parser']['pageTotal'];
  perPage: AppState['parser']['perPage'];
}

export interface State {
  status: string;
  socket: any;
}

import {RouteComponentProps} from 'react-router-dom';

interface MatchParams {
  appID: string;
  page: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
  loadTopics: Thunks['loadTopics'];
  topics: AppState['global']['topics'];
  loading: AppState['global']['loading'];
  pageTotal: AppState['global']['pageTotal'];
  appID: AppState['global']['appID'];
  perPage: AppState['global']['perPage'];
}

export interface State {
  status: string;
  socket: any;
}

import {RouteComponentProps} from 'react-router-dom';
import * as actions from 'store/global/actions';

interface MatchParams {
  appID: string;
  page: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
  loadTopics: Thunks['loadTopics'];
  setStatus: typeof actions['setStatus'];
  loading: AppState['global']['loading'];
  status: AppState['global']['status'];
  topics: AppState['parser']['topics'];
  topicTotal: AppState['parser']['topicTotal'];
  pageTotal: AppState['parser']['pageTotal'];
  perPage: AppState['parser']['perPage'];
}

export interface State {
  status: string;
  socket: any;
}

import {RouteComponentProps} from 'react-router-dom';
import * as actions from 'store/parser/actions';

interface MatchParams {
  appID: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
  perPage: AppState['parser']['perPage'];
  loadTopics: Thunks['loadTopics'];
}

export interface State {
  value: string;
  redirect: boolean;
}

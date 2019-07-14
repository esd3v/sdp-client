import * as actions from 'store/parser/actions';
import {RouteComponentProps} from 'react-router-dom';

interface MatchParams {
  page: string;
  appID: string;
}

export interface Props extends RouteComponentProps<MatchParams> {
  pageTotal: AppState['global']['pageTotal'];
}

export interface State {
  selected: number;
}

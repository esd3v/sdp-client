import * as actions from 'store/global/actions';

export interface Props {
  perPage: AppState['global']['perPage'];
  setURL: typeof actions['setURL'];
  loadTopics: Thunks['loadTopics'];
}

export interface State {
  url: string;
}

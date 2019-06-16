import * as actions from 'store/global/actions';

export interface Props {
  perPage: AppState['global']['perPage'];
  setAppID: typeof actions['setAppID'];
  loadTopics: Thunks['loadTopics'];
}

export interface State {
  appID: number;
}

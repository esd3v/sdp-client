export interface Props {
  topics: AppState['global']['topics'];
  loading: AppState['global']['loading'];
  pageTotal: AppState['global']['pageTotal'];
  loadTopics: Thunks['loadTopics'];
}

export interface State {
  status: string;
  socket: any;
}

export interface Props {
  loadTopics: Thunks['loadTopics'];
  appID: AppState['global']['appID'];
  perPage: AppState['global']['perPage'];
  pageTotal: AppState['global']['pageTotal'];
  currentPage: AppState['global']['currentPage'];
}

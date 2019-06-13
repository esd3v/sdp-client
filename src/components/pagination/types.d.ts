export interface Props {
  loadTopics: Thunks['loadTopics'];
  url: AppState['global']['url'];
  perPage: AppState['global']['perPage'];
  pageTotal: AppState['global']['pageTotal'];
  currentPage: AppState['global']['currentPage'];
}

interface AppState {
  global: {
    loading: boolean;
    status: Status;
  };
  parser: {
    appID: number;
    topics: Topic[];
    topicTotal: number;
    pageTotal: number;
  };
}

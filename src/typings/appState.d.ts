interface AppState {
  global: {
    loading: boolean;
    status: Status;
  };
  parser: {
    appID: number;
    appTitle: string;
    topics: Topic[];
    topicTotal: number;
    pageTotal: number;
  };
}

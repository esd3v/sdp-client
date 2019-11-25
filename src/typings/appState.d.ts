interface AppState {
  global: {
    loading: boolean;
    status: {
      type: 'normal' | 'error' | 'success';
      message: string;
    };
  };
  parser: {
    topics: Topic[];
    topicTotal: number;
    perPage: PerPage;
    pageTotal: number;
  };
}

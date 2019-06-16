interface AppState {
  global: {
    appID: number;
    topics: Topic[];
    perPage: number;
    pageTotal: number;
    currentPage: number;
    loading: boolean;
  };
}

interface Thunks {
  switchPerPage: Thunk<number>;
  loadTopics: Thunk<HTTPParams['loadTopics']>;
}

interface HTTPParams {
  loadTopics: {
    appID: number;
    page: number;
    perPage: number;
  };
}

interface HTTPRequest {
  loadTopics: HTTPGet<HTTPParams['loadTopics'], {
    topics: Topic[];
    pageTotal: number;
  }>;
}

interface Topic {
  pinned: boolean;
  locked: boolean;
  answered: boolean;
  title: string;
  author: string;
  timestamp: number;
  replyCount: number;
  tooltip: string;
  url: string;
}

interface AppState {
  global: {
    url: string;
    topics: Topic[];
    perPage: number;
    pageTotal: number;
    loading: boolean;
  };
}

interface Thunks {
  switchPerPage: Thunk<number>;
  loadTopics: Thunk<HTTPParams['loadTopics']>;
}

interface HTTPParams {
  loadTopics: {
    url: string;
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

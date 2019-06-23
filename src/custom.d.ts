interface AppState {
  global: {
    appID: number;
    topics: Topic[];
    perPage: PerPage;
    pageTotal: number;
    currentPage: number;
    loading: boolean;
  };
}

interface Thunks {
  switchPerPage: Thunk<PerPage>;
  loadTopics: Thunk<HTTPParams['loadTopics']>;
}

interface HTTPParams {
  loadTopics: {
    appID: number;
    page: number;
    perPage: PerPage;
  };
}

interface HTTPRequest {
  loadTopics: HTTPGet<HTTPParams['loadTopics'], {
    topics: Topic[];
    pageTotal: number;
  }>;
}

type PerPage = 15 | 30 | 50;

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

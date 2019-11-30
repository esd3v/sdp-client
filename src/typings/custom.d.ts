type PerPage = 15 | 30 | 50;

interface Status {
  type: 'normal' | 'error' | 'success';
  message: string;
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

import * as http from './http';

export const loadTopics: HTTPRequest['loadTopics'] = async params => {
  const topics = await http.get(params);
  return topics.data;
};

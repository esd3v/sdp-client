import {TopicItem} from './';
import renderer from 'react-test-renderer';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer
    .create(<TopicItem topic={{
      pinned: false,
      locked: false,
      answered: false,
      title: '',
      author: '',
      timestamp: 0,
      replyCount: 0,
      tooltip: '',
      url: '',
    }}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

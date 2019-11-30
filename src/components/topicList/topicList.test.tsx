import React from 'react';
import {TopicList} from './';
import renderer from 'react-test-renderer';
import {withStore} from 'helpers/react';

test('renders correctly', () => {
  const tree = renderer
    .create(withStore({
      component: <TopicList topics={[{
        pinned: false,
        locked: false,
        answered: false,
        title: '',
        author: '',
        timestamp: 0,
        replyCount: 0,
        tooltip: '',
        url: '',
      }]}/>,
    }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import {Icon} from './';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<Icon id=''/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

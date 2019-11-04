import {Status} from './';
import renderer from 'react-test-renderer';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer
    .create(<Status type="normal" message="test"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

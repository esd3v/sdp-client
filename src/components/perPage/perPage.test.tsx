import React from 'react';
import {PerPage} from './';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<PerPage onChange={() => 0}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

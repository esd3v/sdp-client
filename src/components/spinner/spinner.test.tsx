import {Spinner} from './';
import renderer from 'react-test-renderer';
import React from 'react';

test('renders correctly', () => {
  const tree = renderer
    .create(<Spinner full={false}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

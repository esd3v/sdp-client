import React from 'react';
import {Button} from './';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(<Button>test</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

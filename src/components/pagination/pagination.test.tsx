import React from 'react';
import {Pagination} from './';
import renderer from 'react-test-renderer';
import {withStoreRouter} from 'jestHelpers';

test('renders correctly', () => {
  const tree = renderer
    .create(withStoreRouter(() => <Pagination onSwitch={() => {}}/>))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

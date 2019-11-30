import React from 'react';
import {Pagination} from './';
import renderer from 'react-test-renderer';
import {withStoreRouter} from 'jestHelpers';

test('renders correctly', () => {
  const tree = renderer
    .create(withStoreRouter({
      component: <Pagination onSwitch={() => {}}/>,
    }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

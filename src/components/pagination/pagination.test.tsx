import React from 'react';
import {Pagination} from './';
import renderer from 'react-test-renderer';
import {withStoreRouter} from 'helpers/react';

test('renders correctly', () => {
  const tree = renderer
    .create(withStoreRouter({
      component: <Pagination onSwitch={() => 0}/>,
    }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

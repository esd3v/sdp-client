import React from 'react';
import {SearchBar} from './';
import renderer from 'react-test-renderer';
import {withStoreRouter} from 'helpers/react';

test('renders correctly', () => {
  const tree = renderer
    .create(withStoreRouter({
      component: <SearchBar onSubmit={() => {}}/>,
    }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

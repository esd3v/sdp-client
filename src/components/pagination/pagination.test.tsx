import {Pagination} from './';
import renderer from 'react-test-renderer';
import {withStoreRouter} from 'jestHelpers';

test('renders correctly', () => {
  const tree = renderer
    .create(withStoreRouter(Pagination))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import {Main} from './';
import renderer from 'react-test-renderer';
import {withStoreRouter} from 'jestHelpers';

test('renders correctly', () => {
  const tree = renderer
    .create(withStoreRouter(Main))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import {PerPage} from './';
import renderer from 'react-test-renderer';
import {withStore} from 'jestHelpers';

test('renders correctly', () => {
  const tree = renderer
    .create(withStore(PerPage))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

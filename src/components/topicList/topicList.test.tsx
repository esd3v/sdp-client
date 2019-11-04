import {TopicList} from './';
import renderer from 'react-test-renderer';
import {withStore} from 'jestHelpers';

test('renders correctly', () => {
  const tree = renderer
    .create(withStore(TopicList))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import * as styles from './styles';
import {SearchInput} from 'components/searchInput';
import {Button} from 'components/button';
import {Props, State} from './types';

export class SearchBar extends React.Component<Props, State> {
  public state = {
    appID: 323190,
  };

  public componentDidMount() {
    this.props.setAppID(this.state.appID);
  }

  public handleChange = e => {
    this.setState({
      appID: parseInt(e.target.value, 10),
    });
  }

  public handleClick = async () => {
    this.props.loadTopics({
      appID: this.state.appID,
      page: 1,
      perPage: this.props.perPage,
    });
  }

  public render() {
    return (
      <div className={styles.searchBar}>
        <SearchInput
          onChange={this.handleChange}
          value={this.state.appID}
        />
        <Button onClick={this.handleClick}>Parse</Button>
      </div>
    );
  }
}

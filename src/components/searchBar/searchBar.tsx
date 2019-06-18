import * as React from 'react';
import * as styles from './styles';
import {SearchInput} from 'components/searchInput';
import {Button} from 'components/button';
import {Props, State} from './types';

export class SearchBar extends React.Component<Props, State> {
  public state = {
    appID: 629760,
  };

  public componentDidMount() {
    this.props.setAppID(this.state.appID);
  }

  public handleChange = e => {
    this.setState({
      appID: parseInt(e.target.value, 10),
    });
  }

  public handleClick = async e => {
    e.preventDefault();
    this.props.loadTopics({
      appID: this.state.appID,
      page: 1,
      perPage: this.props.perPage,
    });
  }

  public render() {
    return (
      <form className={styles.searchBar}>
        <SearchInput
          onChange={this.handleChange}
          value={this.state.appID}
        />
        <Button type="submit" onClick={this.handleClick}>Parse</Button>
      </form>
    );
  }
}

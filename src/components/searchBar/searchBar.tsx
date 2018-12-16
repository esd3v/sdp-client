import * as React from 'react';
import * as styles from './styles';
import {SearchInput} from 'components/searchInput';
import {Button} from 'components/button';
import {Props, State} from './types';

export class SearchBar extends React.Component<Props, State> {
  public state = {
    url: 'https://steamcommunity.com/app/323190/discussions/1/',
  };

  public componentDidMount() {
    this.props.setURL(this.state.url);
  }

  public handleChange = e => {
    this.setState({
      url: e.target.value,
    });
  }

  public handleClick = async () => {
    const url = this.state.url;
    this.props.loadTopics({
      url,
      page: 1,
      perPage: this.props.perPage,
    });
  }

  public render() {
    return (
      <div className={styles.searchBar}>
        <SearchInput
          onChange={this.handleChange}
          value={this.state.url}
        />
        <Button onClick={this.handleClick}>Parse</Button>
      </div>
    );
  }
}

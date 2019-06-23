import * as React from 'react';
import * as styles from './styles';
import {Button} from 'components/button';
import {Props, State} from './types';
import {Redirect} from 'react-router';

export class SearchBar extends React.Component<Props, State> {
  public state = {
    value: '',
    redirect: false,
  };

  public componentDidMount() {
    this.setState(() => ({
      value: this.props.match.params.appID || '',
    }));
  }

  public render() {
    return (
      <>
        <form className={styles.searchBar}>
          <input
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Insert ID of Steam application (e.g. 629760)"
          />
          <Button
            type="submit"
            disabled={this.isButtonDisabled()}
            onClick={this.handleClick}
          >Parse
          </Button>
        </form>
        {
          this.state.redirect &&
          <Redirect to={`/app/${this.state.value}`}/>
        }
      </>
    );
  }

  private isButtonDisabled() {
    return !this.state.value;
  }

  private handleChange = e => {
    const value = e.target.value;
    const isDigits = [...value].every(item =>
      '0123456789'.includes(item));

    if (isDigits) {
      this.setState(() => ({
        value,
      }));
    }
  }

  private handleClick = async e => {
    e.preventDefault();

    this.props.loadTopics({
      appID: parseInt(this.state.value, 10),
      page: 1,
      perPage: this.props.perPage,
    });

    this.setState(() => ({
      redirect: true,
    }), () => this.setState(() => ({
      redirect: false,
    })));
  }
}

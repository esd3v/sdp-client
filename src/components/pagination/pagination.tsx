import * as React from 'react';
import ReactPaginate from 'react-paginate';
import {Redirect} from 'react-router-dom';
import {Props, State} from './types';
import * as styles from './styles';
import {Button} from 'components/button';
import {Responsive} from 'components/responsive';

export class Pagination extends React.Component<Props, State> {
  public state = {
    selected: parseInt(this.props.match.params.page, 10) || 1,
  };

  public render() {
    return (
      <>
      <Responsive min="xs" max="sm">
        <div className={styles.container}>
          <Button
            className={styles.mobileButton}
            disabled={this.isFistPage()}
            onClick={this.switchPageMobileButton.bind(this, false)}
          >Prev
          </Button>
          <select
            className={styles.select}
            value={this.getCurrentPage()}
            onChange={this.switchPageMobileSelect}
          >
            {
              Object
                .keys([...Array(this.props.pageTotal + 1)])
                .slice(1)
                .map(item => parseInt(item, 10))
                .map(item =>
                  <option key={item}>{item}</option>)
            }
          </select>
          <Button
            className={styles.mobileButton}
            disabled={this.isLastPage()}
            onClick={this.switchPageMobileButton.bind(this, true)}
          >Next
          </Button>
        </div>
      </Responsive>
      <Responsive min="sm">
        <ReactPaginate
          pageCount={this.props.pageTotal}
          initialPage={!this.getCurrentPage() ? 0 : (this.getCurrentPage() - 1)}
          disableInitialCallback={true}
          containerClassName={styles.container}
          nextClassName={styles.button}
          previousClassName={styles.button}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          activeClassName={styles.activeLink}
          onPageChange={this.switchPageDesktop}
          previousLabel="Prev"
        />
      </Responsive>
      {
        <Redirect to={`/app/${this.props.match.params.appID}/page/${this.state.selected}`}/>
      }
      </>
    );
  }

  private getCurrentPage() {
    return parseInt(this.props.match.params.page, 10);
  }

  private isFistPage = () =>
    this.getCurrentPage() === 1

  private isLastPage = () =>
    this.getCurrentPage() === this.props.pageTotal

  private getNextPage = () =>
    !this.isLastPage() ?
      this.getCurrentPage() + 1 :
        this.getCurrentPage()

  private getPrevPage = () =>
    !this.isFistPage() ?
      this.getCurrentPage() - 1 :
      this.getCurrentPage()

  private switchPageDesktop = ({selected}) =>
    this.setState(() => ({
      selected: selected + 1,
    }))

  private switchPageMobileButton = (isNext: boolean) =>
    this.setState(() => ({
      selected: isNext ? this.getNextPage() : this.getPrevPage(),
    }))

  private switchPageMobileSelect = e => {
    const value = e.target.value;

    this.setState(() => ({
      selected: parseInt(value, 10),
    }));
  }
}

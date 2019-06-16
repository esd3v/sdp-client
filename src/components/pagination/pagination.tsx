import * as React from 'react';
import ReactPaginate from 'react-paginate';
import {Props} from './types';
import * as styles from './styles';
import {Button} from 'components/button';
import {Responsive} from 'components/responsive';

export class Pagination extends React.Component<Props> {
  public isFistPage = () =>
    this.props.currentPage === 1

  public isLastPage = () =>
    this.props.currentPage === this.props.pageTotal

  public getNextPage = () =>
    !this.isLastPage() ?
      this.props.currentPage + 1 :
        this.props.currentPage

  public getPrevPage = () =>
    !this.isFistPage() ?
      this.props.currentPage - 1 :
      this.props.currentPage

  public switchPageDesktop = ({selected}) =>
    this.loadTopics(selected + 1)

  public switchPageMobileButton = (isNext: boolean) =>
    this.loadTopics(isNext ? this.getNextPage() : this.getPrevPage())

  public switchPageMobileSelect = e =>
    this.loadTopics(parseInt(e.target.value, 10))

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
            value={this.props.currentPage}
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
          initialPage={!this.props.currentPage ? 0 : (this.props.currentPage - 1)}
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
      </>
    );
  }

  private loadTopics = (page: number) =>
    this.props.loadTopics({
      appID: this.props.appID,
      page,
      perPage: this.props.perPage,
    })
}

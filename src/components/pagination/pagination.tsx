import * as React from 'react';
import ReactPaginate from 'react-paginate';
import {Props} from './types';
import * as styles from './styles';

export class Pagination extends React.Component<Props> {
  public switchPage = ({selected}) =>
    this.props.loadTopics({
      url: this.props.url,
      page: selected + 1,
      perPage: this.props.perPage,
    })

  public render() {
    return (
      <ReactPaginate
        pageCount={this.props.pageTotal}
        containerClassName={styles.container}
        nextClassName={styles.button}
        previousClassName={styles.button}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        activeClassName={styles.activeLink}
        onPageChange={this.switchPage}
        previousLabel="Prev"
      />
    );
  }
}

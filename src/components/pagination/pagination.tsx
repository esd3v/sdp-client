import React from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router';
import {Button} from 'components/button';
import {Responsive} from 'components/responsive';
import * as styles from './styles';

export const Pagination: React.FunctionComponent = () => {

  const history = useHistory();
  const {appID, page} = useParams();
  const pageTotal = useSelector((state: AppState) => state.parser.pageTotal);

  const getCurrentPage = () => Number(page);

  const isFistPage = () =>
    getCurrentPage() === 1;

   const isLastPage = () =>
    getCurrentPage() === pageTotal;

  const getNextPage = () =>
    !isLastPage() ?
      getCurrentPage() + 1 :
        getCurrentPage();

  const getPrevPage = () =>
    !isFistPage() ?
      getCurrentPage() - 1 :
      getCurrentPage();

  const switchPage = (page: number) =>
    history.push(`/app/${appID}/page/${page}`);

  const switchPageDesktop = ({selected}) =>
    switchPage(selected + 1);

  const switchPageMobileButton = (isNext: boolean) =>
    () => switchPage(isNext ? getNextPage() : getPrevPage());

  const switchPageMobileSelect = e =>
    switchPage(Number(e.target.value));

  return (
    <>
      <Responsive min="xs" max="sm">
        <div className={styles.container}>
          <Button
            className={styles.mobileButton}
            disabled={isFistPage()}
            onClick={switchPageMobileButton(false)}
          >Prev
          </Button>
          <select
            className={styles.select}
            value={getCurrentPage() || 0}
            onChange={switchPageMobileSelect}
          >
            {
              Object
                .keys([...Array(pageTotal + 1)])
                .slice(1)
                .map(item => Number(item))
                .map(item =>
                  <option key={item}>{item}</option>)
            }
          </select>
          <Button
            className={styles.mobileButton}
            disabled={isLastPage()}
            onClick={switchPageMobileButton(true)}
          >Next
          </Button>
        </div>
      </Responsive>
      <Responsive min="sm">
        <ReactPaginate
          pageCount={pageTotal}
          forcePage={!getCurrentPage() ? 0 : (getCurrentPage() - 1)}
          disableInitialCallback={true}
          containerClassName={styles.container}
          nextClassName={styles.button}
          previousClassName={styles.button}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          activeClassName={styles.activeLink}
          onPageChange={switchPageDesktop}
          previousLabel="Prev"
        />
      </Responsive>
    </>
  );
};

import * as React from 'react';
import * as styles from './styles';
import {Props} from './types';

export const SearchInput: React.SFC<Props> = ({onChange, value}) => (
  <input
    className={styles.searchInput}
    onChange={onChange}
    value={value}
    placeholder="Insert Steam discussion link"
  />
);

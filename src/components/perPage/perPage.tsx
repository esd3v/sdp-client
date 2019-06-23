import * as React from 'react';
import {PERPAGE} from 'config';
import {Props} from './types';
import * as styles from './styles';

export const PerPage: React.SFC<Props> = props => {
  const onChange = e => {
    const value = parseInt(e.target.value, 10) as PerPage;
    props.switchPerPage(value);
  };

  return (
    <div className={styles.perPage}>
      <div className="label">Per page:</div>
      <select onChange={onChange}>
        {PERPAGE.map(item =>
          <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

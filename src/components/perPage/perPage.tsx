import React from 'react';
import {PERPAGE} from 'config';
import {Props} from './types';
import * as styles from './styles';

export const PerPage: React.FunctionComponent<Props> = ({onChange}) => {
  const handleChange = e =>
    onChange(e.target.value);

  return (
    <div className={styles.perPage}>
      <div className="label">Per page:</div>
      <select onChange={handleChange}>
        {PERPAGE.map(item =>
          <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

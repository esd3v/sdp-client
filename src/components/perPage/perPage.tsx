import React from 'react';
import {useDispatch} from 'react-redux';
import {PERPAGE} from 'config';
import {actions} from 'store/actions';
import {Props} from './types';
import * as styles from './styles';

export const PerPage: React.FunctionComponent<Props> = props => {
  const dispatch = useDispatch();

  const setPerPage = (payload: PerPage) =>
    dispatch(actions.parser.setPerPage(payload));

  const onChange = e =>
    setPerPage(Number(e.target.value) as PerPage);

  return (
    <div className={styles.perPage}>
      <div className="label">Per page:</div>
      <select disabled={props.disabled} onChange={onChange}>
        {PERPAGE.map(item =>
          <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

import React, {
  useState,
  FunctionComponent,
  useEffect,
} from 'react';
import {useParams} from 'react-router';
import {Button} from 'components/button';
import {Props} from './types';
import * as styles from './styles';

export const SearchBar: FunctionComponent<Props> = ({onSubmit}) => {
  const {appID} = useParams();
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (value) {
      onSubmit(value);
    }
  };

  useEffect(() => {
    if (appID) {
      setValue(appID);
    }
  }, [appID]);

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          placeholder="ID of Steam application (e.g. 323190)"
        />
        <Button type="submit">Parse</Button>
      </form>
    </>
  );
};

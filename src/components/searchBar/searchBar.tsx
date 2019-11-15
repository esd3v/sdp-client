import React, {
  useState,
  FunctionComponent,
  useEffect,
} from 'react';
import {useParams, useHistory} from 'react-router';
import {useSelector} from 'react-redux';
import {Button} from 'components/button';
import {usePrevious} from 'hooks';
import * as styles from './styles';

export const SearchBar: FunctionComponent = () => {
  const history = useHistory();
  const {appID} = useParams();

  const isLoading = useSelector((state: AppState) => state.global.loading);

  const [value, setValue] = useState('');
  const prevValue = usePrevious(value);

  const isButtonDisabled = () =>
    !value || isLoading;

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (value && (value !== appID)) {
      history.replace(`/app/${value}`);
    }
  };

  useEffect(() => {
    if (appID && Number(appID) && !value && !prevValue) {
      setValue(appID);
    }
  }, [appID, value, prevValue]);

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={value}
          disabled={isLoading}
          placeholder="ID of Steam application (e.g. 881100)"
        />
        <Button
          type="submit"
          disabled={isButtonDisabled()}
        >Parse
        </Button>
      </form>
    </>
  );
};

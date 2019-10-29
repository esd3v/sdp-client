import {useRef, useEffect} from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

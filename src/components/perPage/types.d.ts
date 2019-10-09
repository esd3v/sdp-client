import * as actions from 'store/parser/actions';

export interface Props {
  disabled: boolean;
  setPerPage: typeof actions['setPerPage'];
}

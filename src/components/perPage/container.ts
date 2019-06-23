import * as actions from 'store/global/actions';
import {connect} from 'react-redux';
import {PerPage} from './perPage';

const mapDispatch = {
  setPerPage: actions.setPerPage,
};

export const PerPageContainer = connect(null, mapDispatch)(PerPage);

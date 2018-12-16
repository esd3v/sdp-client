import * as thunks from 'store/global/thunks';
import {connect} from 'react-redux';
import {PerPage} from './perPage';

const mapDispatch = {
  switchPerPage: thunks.switchPerPage,
};

export const PerPageContainer = connect(null, mapDispatch)(PerPage);

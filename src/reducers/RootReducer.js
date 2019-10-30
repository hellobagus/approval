import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import { menuReducer, detailReducer } from './MenuReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
  error,
  user,
  status,
  menuReducer,
  detailReducer
});

export default rootReducer;

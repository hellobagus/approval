import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import menuReducer from './MenuReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
  error,
  user,
  status,
  menuReducer
});

export default rootReducer;

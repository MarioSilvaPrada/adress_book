import { combineReducers } from 'redux';

// reducers
import users from 'state/reducers/usersReducer';
import loading from 'state/reducers/loadingReducers';

export default combineReducers({
  users,
  loading,
});

import { combineReducers } from 'redux';
import accountReducer from './AccountReducer';

const rootReducer = combineReducers({
  accountData: accountReducer
});

export default rootReducer;

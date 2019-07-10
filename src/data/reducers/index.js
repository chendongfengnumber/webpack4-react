import { combineReducers } from 'redux';
import homeReducers from './homeReducers';

const rootReducer = combineReducers({
  homeReducers,
});


export default rootReducer;

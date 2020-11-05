import { combineReducers } from 'redux';
import bingoReducer from './bingo';

export default combineReducers({
  bingo: bingoReducer
})

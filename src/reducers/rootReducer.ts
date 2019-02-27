import { combineReducers } from 'redux';
import seaReducer from './sea/seaReducer';

const rootReducer = combineReducers({
  seaReducer,
});

export default rootReducer;

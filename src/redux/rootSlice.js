import {combineReducers} from 'redux';

import commonReducer from './slices/commonSlice';

const reducers = combineReducers({
  common: commonReducer,
});

export default reducers;

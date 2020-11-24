import {combineReducers} from 'redux';

import appReducer from './app';
import userReducer from './user';

const reducers = {appReducer, userReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;

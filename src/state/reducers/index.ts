import {combineReducers} from 'redux';

import appReducer from './app';

const reducers = {appReducer};

const rootReducer = combineReducers(reducers);

export default rootReducer;

import {combineReducers} from 'redux';

import app from 'state/reducers/app';
import user from 'state/reducers/user';

const reducers = {app, user};

const rootReducer = combineReducers(reducers);

export default rootReducer;

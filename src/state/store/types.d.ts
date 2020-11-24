import type {StateAppReducer} from 'state/reducers/app/types';
import type {StateUserReducer} from 'state/reducers/user/types';

export type StateController = {
  start: boolean;
  success: boolean;
  fail: boolean;
};

export interface StateStore {
  appReducer: StateAppReducer;
  userReducer: StateUserReducer;
}

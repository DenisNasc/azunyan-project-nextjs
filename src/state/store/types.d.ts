import type {StateAppReducer} from 'state/reducers/app/types';

export type StateController = {
  start: boolean;
  success: boolean;
  fail: boolean;
};

export interface StateStore {
  appReducer: StateAppReducer;
}

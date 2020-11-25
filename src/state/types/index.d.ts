import {StateApp} from 'state/types/app';
import {StateUser} from 'state/types/user';

export interface DefaultStateProps {
  errorMessage: string;
  stateController: {
    start: boolean;
    success: boolean;
    fail: boolean;
  };
}

export default interface StateStore {
  app: StateApp;
  user: StateUser;
}

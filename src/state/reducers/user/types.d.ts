import type {Action} from 'redux';
import type {StateController} from 'state/store/types';
import type {User} from 'state/types/user';

export type PayloadUser = {
  handleUser?: User;
  newPlaylist?: {name: string};
  delPlaylist?: {name: string};
  delMusic?: {playlist: string; music: string; artist: string};
  errorMessage?: string;
  stateController?: StateController;
};

export default interface ActionUser extends Action<string> {
  payload: PayloadUser;
}

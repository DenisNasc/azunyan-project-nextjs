import type {Action} from 'redux';
import type {StateController} from 'state/store/types';

type TypePlaylist = {
  name: string;
  musics: {name: string; artist: string}[];
};

export interface StateUserReducer {
  email: string;
  id: string;
  name: string;
  profileImage: string;
  playlists: TypePlaylist[];
  errorMessage: string;
  userStateController: {
    start: boolean;
    success: boolean;
    fail: boolean;
  };
}

type PayloadUserReducer = {
  newPlaylist?: {name: string};
  delPlaylist?: {name: string};
  delMusic?: {playlist: string; music: string; artist: string};
  errorMessage?: string;
  stateController?: StateController;
};

export interface ActionUserReducer extends Action<string> {
  payload?: PayloadUserReducer;
}

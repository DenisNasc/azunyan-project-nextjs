import type {Action} from 'redux';
import type {StateController} from 'state/store/types';

type TypeMusic = {
  id: string;
  name: string;
  artist: string;
  lyrics?: string;
};

type TypePlaylist = {
  id: string;
  name: string;
  musics: TypeMusic[];
};

type TypeUser = {
  id: string;
  name: string;
  email: string;
  playlists: TypePlaylist[];
};

type TypeCurrentMusic = {
  artist: string;
  name: string;
  lyrics: string[][];
};

type PayloadAppReducer = {
  query?: string;
  currentMusic?: TypeCurrentMusic;
  user?: TypeUser;
  music?: TypeMusic;
  errorMessage?: string;
  stateController?: StateController;
};

export interface ActionAppReducer extends Action<string> {
  payload?: PayloadAppReducer;
}

export interface StateAppReducer {
  query: string;
  currentMusic: TypeCurrentMusic;
  user: TypeUser;
  errorMessage: string;
  stateController: StateController;
}

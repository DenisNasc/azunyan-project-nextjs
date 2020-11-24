import type {Action} from 'redux';
import type {StateController} from 'state/store/types';

type TypeMusic = {
  name: string;
  artist: string;
};

type TypePlaylist = {
  name: string;
  musics: TypeMusic[];
};

type TypeUser = {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  playlists: TypePlaylist[];
};

type TypeCurrentPlaylist = {
  artist: string;
  name: string;
  lyrics: string[][];
}[];

type PayloadAppReducer = {
  query?: string;
  addMusicToCurrentPlaylist?: {name: string; artist: string; lyrics: string[][]};
  setCurrentMusic?: {name: string; artist: string; lyrics: string[][]};
  setCurrentPlaylist?: TypeCurrentPlaylist;
  music?: TypeMusic;
  errorMessage?: string;
  stateController?: StateController;
};

export interface ActionAppReducer extends Action<string> {
  payload?: PayloadAppReducer;
}

export interface StateAppReducer {
  query: string;
  currentPlaylist: TypeCurrentPlaylist;
  errorMessage: string;
  stateController: StateController;
}

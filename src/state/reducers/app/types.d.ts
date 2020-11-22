import {TypePlaylist} from 'components/molecules/HomeLateralMenu';
import {Action} from 'redux';
import {StateController} from 'state/store/types';

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

type PayloadAppReducer = {
  query?: string;
  currentMusic?: {name: string; lyrics: string[]; artist: string};
  user?: TypeUser;
  music?: TypeMusic;
  errorMessage?: string;
  stateController?: StateController;
};

export interface StateAppReducer {
  query: string;
  currentMusic: {artist: string; name: string; lyrics: string[]};
  user: TypeUser;
  musicsDB: {artistName: string; musics: {lyrics: string[]; name: string}[]}[];
  errorMessage: string;
  stateController: StateController;
}

export interface ActionAppReducer extends Action<string> {
  payload?: PayloadAppReducer;
}

import type {Action} from 'redux';

type PayloadApp = {
  query?: string;
  music?: TypeMusic;
  addMusicToCurrentPlaylist?: {name: string; artist: string; lyrics: string[][]};
  setCurrentMusic?: {name: string; artist: string; lyrics: string[][]};
  setCurrentPlaylist?: TypeCurrentPlaylist;
  errorMessage?: string;
};

export default interface ActionApp extends Action<string> {
  payload: PayloadApp;
}

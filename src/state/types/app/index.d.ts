import type {DefaultStateProps} from 'state/types';

type TypeMusic = {
  name: string;
  artist: string;
  lyrics: string[][];
};

export interface App {
  query: string;
  currentPlaylist: TypeMusic[];
}

export default interface StateApp extends App, DefaultStateProps {}

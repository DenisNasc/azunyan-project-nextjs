import type {DefaultStateProps} from 'state/types';

type TypePlaylist = {
  name: string;
  musics: {name: string; artist: string}[];
};

export interface User {
  id: string;
  email: string;
  name: string;
  profileImageUrl: string;
  playlists: TypePlaylist[];
}

export default interface StateUser extends User, DefaultStateProps {}

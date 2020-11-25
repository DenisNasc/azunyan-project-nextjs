type TypeMusic = {
  name: string;
  artist: string;
  lyrics: stirng[][];
};

type TypePlaylist = {
  name: string;
  musics: TypeMusic[];
};

export type TypeUser = {
  id: string;
  name: string;
  email: string;
  profileImageUrl: string;
  playlists: TypePlaylist[];
};

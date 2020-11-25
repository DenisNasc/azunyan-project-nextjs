import type {Reducer} from 'redux';

import * as ACTIONS from 'state/actions/user';

import type StateUser from 'state/types/user';
import type ActionUser from './types';

export const initialState: StateUser = {
  email: '',
  id: '',
  name: '',
  profileImageUrl: '',
  playlists: [
    {
      name: 'japanese music',
      musics: [
        {name: 'road of resistance', artist: 'baby metal'},
        {name: 'masterpiece', artist: 'scandal'},
        {name: 'kiseki rush', artist: 'girlfriend'},
        {name: 'far', artist: 'ueda marie'},
      ],
    },
  ],
  errorMessage: '',
  stateController: {
    start: false,
    success: false,
    fail: false,
  },
};

const userReducer: Reducer<StateUser, ActionUser> = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTIONS.USER_STATE_CONTROLLER_START: {
      return {...state, stateController: {start: true, success: false, fail: false}};
    }

    case ACTIONS.USER_STATE_CONTROLLER_SUCCESS: {
      return {...state, stateController: {start: false, success: true, fail: false}};
    }

    case ACTIONS.USER_STATE_CONTROLLER_FAIL: {
      return {...state, stateController: {start: false, success: false, fail: true}};
    }

    case ACTIONS.HANDLE_USER: {
      return {...state, ...payload.handleUser};
    }

    case ACTIONS.USER_HANDLE_ERROR_MESSAGE: {
      return {...state, errorMessage: payload.errorMessage};
    }

    case ACTIONS.ADD_PLAYLIST: {
      const playlistExists = state.playlists.find(
        e => e.name.toLowerCase() === payload.newPlaylist.name.toLowerCase()
      );

      if (playlistExists)
        return {
          ...state,
          errorMessage: `Uma playlist com o nome ${payload.newPlaylist.name} já existe`,
        };

      return {
        ...state,
        playlists: state.playlists.concat({name: payload.newPlaylist.name, musics: []}),
        errorMessage: '',
      };
    }

    case ACTIONS.DEL_PLAYLIST: {
      return {
        ...state,
        playlists: state.playlists.filter(
          e => e.name.toLowerCase() !== payload.delPlaylist.name.toLowerCase()
        ),
      };
    }

    case ACTIONS.DEL_MUSIC_FROM_PLAYLIST: {
      const {playlist, music, artist} = payload.delMusic;

      const thisPlaylist = state.playlists.find(
        e => e.name.toLowerCase() === playlist.toLowerCase()
      );

      const filtredPlaylist = thisPlaylist.musics.filter(
        e =>
          e.name.toLowerCase() !== music.toLowerCase() &&
          e.artist.toLowerCase() !== artist.toLowerCase()
      );

      thisPlaylist.musics = filtredPlaylist;

      const newListOfPlaylists = state.playlists
        .filter(e => e.name.toLowerCase() !== playlist.toLowerCase())
        .concat(thisPlaylist);

      return {...state, playlists: newListOfPlaylists};
    }

    default: {
      return {...state};
    }
  }
};

export default userReducer;

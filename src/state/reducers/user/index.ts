import {PlaylistAdd} from '@material-ui/icons';
import type {Reducer} from 'redux';

import * as userReducerActions from '../../actions/user';
import type {ActionUserReducer, StateUserReducer} from './types';

export const initialState: StateUserReducer = {
  email: '',
  id: '',
  name: '',
  profileImage: '',
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
  userStateController: {
    start: false,
    success: false,
    fail: false,
  },
};

const userReducer: Reducer<StateUserReducer, ActionUserReducer> = (
  state = initialState,
  action
) => {
  const {type, payload} = action;

  switch (type) {
    case userReducerActions.USER_STATE_CONTROLLER_START: {
      return {...state, userStateController: {start: true, success: false, fail: false}};
    }

    case userReducerActions.USER_STATE_CONTROLLER_SUCCESS: {
      return {...state, userStateController: {start: false, success: true, fail: false}};
    }

    case userReducerActions.USER_STATE_CONTROLLER_FAIL: {
      return {...state, userStateController: {start: false, success: false, fail: true}};
    }

    case userReducerActions.HANDLE_ERROR_MESSAGE: {
      return {...state, errorMessage: payload.errorMessage};
    }

    case userReducerActions.ADD_PLAYLIST: {
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

    case userReducerActions.DEL_PLAYLIST: {
      return {
        ...state,
        playlists: state.playlists.filter(
          e => e.name.toLowerCase() !== payload.delPlaylist.name.toLowerCase()
        ),
      };
    }

    case userReducerActions.DEL_MUSIC_FROM_PLAYLIST: {
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

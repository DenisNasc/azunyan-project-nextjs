import type {Reducer} from 'redux';

import * as ACTIONS from 'state/actions/app';

import type StateApp from 'state/types/app';
import type ActionApp from './types';

export const initialState: StateApp = {
  query: '',
  currentPlaylist: [],

  errorMessage: '',
  stateController: {
    start: false,
    success: false,
    fail: false,
  },
};

const appReducer: Reducer<StateApp, ActionApp> = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ACTIONS.APP_STATE_CONTROLLER_START: {
      return {...state, stateController: {start: true, success: false, fail: false}};
    }

    case ACTIONS.APP_STATE_CONTROLLER_SUCCESS: {
      return {...state, stateController: {start: false, success: true, fail: false}};
    }

    case ACTIONS.APP_STATE_CONTROLLER_FAIL: {
      return {...state, stateController: {start: false, success: false, fail: true}};
    }

    case ACTIONS.HANDLE_MUSIC_QUERY: {
      return {...state, query: payload.query};
    }

    case ACTIONS.ADD_MUSIC_TO_CURRENT_PLAYLIST: {
      return {
        ...state,
        currentPlaylist: state.currentPlaylist.concat(payload.addMusicToCurrentPlaylist),
      };
    }

    case ACTIONS.SET_CURRENT_MUSIC: {
      const newPlaylist = [...state.currentPlaylist];
      newPlaylist.splice(0, 1, payload.setCurrentMusic);
      return {
        ...state,
        currentPlaylist: newPlaylist,
      };
    }

    case ACTIONS.SET_CURRENT_PLAYLIST: {
      return {...state, currentPlaylist: payload.setCurrentPlaylist};
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;

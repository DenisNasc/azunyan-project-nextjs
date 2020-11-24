import type {Reducer} from 'redux';

import * as appReducerActions from '../../actions/app';
import type {ActionAppReducer, StateAppReducer} from './types';

export const initialState: StateAppReducer = {
  query: '',
  currentPlaylist: [],

  errorMessage: '',
  stateController: {
    start: false,
    success: false,
    fail: false,
  },
};

const appReducer: Reducer<StateAppReducer, ActionAppReducer> = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case appReducerActions.HANDLE_MUSIC_QUERY: {
      return {...state, query: payload.query};
    }

    case appReducerActions.ADD_MUSIC_TO_CURRENT_PLAYLIST: {
      return {
        ...state,
        currentPlaylist: state.currentPlaylist.concat(payload.addMusicToCurrentPlaylist),
      };
    }

    case appReducerActions.SET_CURRENT_MUSIC: {
      const newPlaylist = [...state.currentPlaylist];
      newPlaylist.splice(0, 1, payload.setCurrentMusic);
      return {
        ...state,
        currentPlaylist: newPlaylist,
      };
    }

    case appReducerActions.SET_CURRENT_PLAYLIST: {
      return {...state, currentPlaylist: payload.setCurrentPlaylist};
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;

// {
//   artistName: 'girlfriend',
//   musics: [
//     {
//       name: 'sky and blue',
//       lyrics: [
//         `こんなに胸が高鳴って
//   走り出したくなるの　どうして？

//   `,
//         `
//   愛を愛を愛
//   予感がカラダを鳴らしてる

//   `,
//         `
//   声にだせないよ pain ＆ scratch
//   そんな簡単なことじゃないよ

//   `,
//         `
//   愛を愛を愛
//   さよならが近づくようで

//   `,
//         `
//   楽しくなりそうなほうへ
//   一緒に走りだそうね
//   `,
//         `

//   ペダル踏んで君の背中追いかけて走る
//   白いシャツに目が眩んで
//   `,
//         `

//   未来は sky ＆ blue
//   ひたむきに cry ＆ fight
//   だから　待って待って待って待って
//   置いてかないでいてよ

//   `,
//         `
//   今すぐ fly away
//   闘うよ try again
//   だから　待って待って待って
//   おんなじ場所にいたいよ
//   `,
//         `

//   重なる　痛い痛い胸の痛みが
//   君に話したい　僕の気持ちが
//   本当のことね
//   maybe find light
//   `,
//         `

//   何年先だって語って
//   信じたいから今笑って
//   愛を愛を愛
//   たしかな約束が欲しくて
//   `,
//         `

//   楽しくなりそうなほうへ
//   一緒に走っていこうね

//   `,
//         `
//   いつの間にか君の背中遠く感じてる
//   青い空にシャツが揺れる

//   `,
//         `
//   おんなじ sky ＆ blue
//   目指してく cry ＆ fight
//   だから　待って待って待って待って
//   先を行かないでいてよ
//   `,
//         `
//   何度も fly away
//   諦めず try again
//   だから　待って待って待って
//   隣で並んでいたいよ
//   `,
//         `
//   重なる　痛い痛い胸の痛みが
//   君には言えない　僕の気持ちが
//   溢れ出してる
//   maybe find light
//   `,
//         `
//   いつだって必死に
//   今日を生きていたいだけだから
//   永遠なんてなくて、保障だってなくて
//   それでも走っていくんだ

//   `,
//         `
//   未来は sky ＆ blue
//   ひたむきに cry ＆ fight
//   だから　待って待って待って待って
//   置いてかないでいてよ

//   `,
//         `
//   今すぐ fly away
//   闘うよ try again
//   だから　待って待って待って
//   おんなじ場所にいたいよ

//   `,
//         `
//   重なる　痛い痛い胸の痛みが
//   君に話したい　僕の気持ちが
//   背中を押すよ
//   maybe find light
//   `,
//       ],
//     },

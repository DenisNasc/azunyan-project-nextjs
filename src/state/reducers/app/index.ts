import * as appReducerActions from '../../actions/app';
import {Reducer} from 'redux';
import {ActionAppReducer, StateAppReducer} from './types';

export const initialState: StateAppReducer = {
  query: '',
  currentMusic: {
    artist: '',
    name: '',
    lyrics: [],
  },
  user: {
    email: '',
    id: '',
    name: '',
    playlists: [],
  },
  musicsDB: [
    {
      artistName: 'scandal',
      musics: [
        {
          name: 'masterpiece',
          lyrics: [
            `
          はじまりの合図はいつでも突然鳴り響いて
          走り出す鼓動　もう止められないわ
          例えば意地悪な誰かに笑われたとしても
          鈍感で純真なフリして挑みたい
`,
            `
          待ちわびたときは今！新しいドアを開く
          凍りついた心を溶かしてくれるメロディ
          口ずさんで　君にも届けたい
`,
            `
          風に乗って飛んでゆけ　季節に咲く花のように
          揺れながら探してた　歓びに出会える歌を
          忘れないで
          いくつもの日々を超えて　宝石になる君の涙
          夜に置いてきた　願い事を迎えに行こう
          眩しく輝いてる朝陽の方へ
`,
            `
          雨上がりの空に虹が架かるとは限らない
          でも俯いてばっかじゃ見逃しちゃうわ
          要はどんな瞬間もヒントにできる無限の想像力
          more 準備万端 please me! please me! 神様
`,
            `
          間違いも正解もない　自分だけの地図を描く
          積み上げてきたものを壊して辿り着いた
          景色がある
`,
            `
          伝えたい　叶えたい　守りたい　嘘じゃない
          目指してた未来まであと少し
          弱気な自分に負けたくないよ
          何万回だって光に手を伸ばそう
`,
            `
          世界中に飛んでゆけ　あなたに歌ってるよ
          胸一杯に溢れだす　生まれたての歓びを
          抱きしめて
          いくつもの日々を超えて
          歌えるよ　いま　この　“マスターピース”
          夜が終わったら　願い事を叶えに行こう
          どこまでも続いていく　旅路の向こうへ
          `,
          ],
        },
      ],
    },
    {
      artistName: 'baby metal',
      musics: [
        {
          name: 'road of resistance',
          lyrics: [
            `
          東の空を　真っ赤に染める　狼煙の光が
          孤独の闇の　終わりを告げる　新たな　道しるべ
`,
            `
          くじけても　何度でも　心の炎を燃やせ
`,
            `
          Now is the time　！　Is the time　！
          今この瞬間を
          Is the time　！　Is the time　！
          共に生きる
`,
            `
          Just now is the time　！　Is the time　！
          明日の君に歌うよ
          さあ、時は来た
`,
            `
          Go for Resistance　！　Resistance　！
          Wow wow wow wow wow
          心はひとつ
          君が信じるなら
          進め　道なき道でも
          Forever　！　Forever　！
          Wow wow wow wow wow
          心の奥に
          燃える　鋼鉄魂(アツいハート)　それが僕らの　Resistance
`,
            `
          Wow wow wow wow
`,
            `
          命が続く限り
          決して　背を向けたりはしない
          今日が明日を作るんだ
          そう、僕らの未来
          On the way
`,
            `
          Resistance　！　Resistance　！
          Stand up and shout　！
          Justice forever　！
          君が信じるなら
          進め　答えはここにある
          Forever　！　Forever　！
          Wow wow wow wow wow
          心の奥に
          燃える　鋼鉄魂(アツいハート)　僕らの　Resistance
`,
          ],
        },
      ],
    },
    {
      artistName: 'girlfriend',
      musics: [
        {
          name: 'kiseki rush',
          lyrics: [
            `隠すように閉じたよ
          名前さえまだないnote
          消しゴムでこすっても
          消えないの　ホンキの夢
          `,
            `
          風に舞い上がっていく砂
          思わず目を閉じた
          確かに見失ってしまう
          そゆトキもある
          `,
            `
          ah　無謀だと笑われそうで
          誤魔化した　夕焼けの教室で
          キミは強く頷いた
          `,
            `
          奇跡　起こせば　奇跡は
          明日になれば　ヒツゼンになる
          そうやってstoryつむいできたよ　ずっと
          泥で汚れた背中が
          こんなにもカッコイイだなんて
          知らなかったよ
          `,
            `
          立ち止まったりしない
          走り続ければきっと
          手が届く日が来るよ
          今は　実感なくても
          `,
            `
          キミの言葉　届くたびに
          ふるえて気づくんだ
          繋ぎ合ってくようなキズナ
          もっと沢山の歌詞は ※ Mojim.com
          ね　そんな感じ
          `,
            `
          ah　叶え方知らないけれど
          そのほうが　なんだって出来るでしょ
          未来はいつも真っ白
          `,
            `
          奇跡　起こせば　奇跡は
          明日になれば　ゼッタイになる
          消えない夢が色付き始めたら
          二度とは来ない瞬間に
          目をそらしたりしたくないの
          向き合ってくよ
          `,
            `
          何度ぶつかっても　泣きそうでも
          もう一度　もう一度　立ち上がってく
          諦めないとかじゃなくて
          息をするようにただ
          ゼンリョクになって　ガムシャラになって
          扉を開けるの
          `,
            `
          奇跡　起こせば　奇跡は
          明日になれば　ヒツゼンになる
          …ゼッタイになる
          奇跡　起こせば　奇跡は
          明日になれば　ヒツゼンになる
          そうやってstoryつむいできたよ　ずっと
          泥で汚れた背中が
          こんなにもカッコイイだなんて
          知らなかったんだ`,
          ],
        },
        {
          name: 'sky and blue',
          lyrics: [
            `こんなに胸が高鳴って
      走り出したくなるの　どうして？

      `,
            `
      愛を愛を愛
      予感がカラダを鳴らしてる

      `,
            `
      声にだせないよ pain ＆ scratch
      そんな簡単なことじゃないよ

      `,
            `
      愛を愛を愛
      さよならが近づくようで

      `,
            `
      楽しくなりそうなほうへ
      一緒に走りだそうね
      `,
            `

      ペダル踏んで君の背中追いかけて走る
      白いシャツに目が眩んで
      `,
            `

      未来は sky ＆ blue
      ひたむきに cry ＆ fight
      だから　待って待って待って待って
      置いてかないでいてよ

      `,
            `
      今すぐ fly away
      闘うよ try again
      だから　待って待って待って
      おんなじ場所にいたいよ
      `,
            `

      重なる　痛い痛い胸の痛みが
      君に話したい　僕の気持ちが
      本当のことね
      maybe find light
      `,
            `

      何年先だって語って
      信じたいから今笑って
      愛を愛を愛
      たしかな約束が欲しくて
      `,
            `

      楽しくなりそうなほうへ
      一緒に走っていこうね

      `,
            `
      いつの間にか君の背中遠く感じてる
      青い空にシャツが揺れる

      `,
            `
      おんなじ sky ＆ blue
      目指してく cry ＆ fight
      だから　待って待って待って待って
      先を行かないでいてよ
      `,
            `
      何度も fly away
      諦めず try again
      だから　待って待って待って
      隣で並んでいたいよ
      `,
            `
      重なる　痛い痛い胸の痛みが
      君には言えない　僕の気持ちが
      溢れ出してる
      maybe find light
      `,
            `
      いつだって必死に
      今日を生きていたいだけだから
      永遠なんてなくて、保障だってなくて
      それでも走っていくんだ

      `,
            `
      未来は sky ＆ blue
      ひたむきに cry ＆ fight
      だから　待って待って待って待って
      置いてかないでいてよ

      `,
            `
      今すぐ fly away
      闘うよ try again
      だから　待って待って待って
      おんなじ場所にいたいよ

      `,
            `
      重なる　痛い痛い胸の痛みが
      君に話したい　僕の気持ちが
      背中を押すよ
      maybe find light
      `,
          ],
        },
      ],
    },
    {
      artistName: 'ueda marie',
      musics: [
        {
          name: 'far',
          lyrics: [
            `
      単純に思春期だった　まだ10代の私は
想像では無敵だった　足りないものばっかりで
だんだん周りに増えた　愛すべき人達は
どんどん大切になった　失うものとなって
見えないものが見えている間
見えてるものは見えなくなっちゃったんだ

`,
            `
グラウンドに描かれた白いライン
開いては散りゆく花びらに FAR FAR
気付いたら置き去りでグンナイ
窓際　歌っていたムーンライト FAR FAR
連れ去って

`,
            `
簡単に強くなったり　毎週末不安になったり
息がはねて目覚めて　ここに届くエスオーエス
つらそうだって一過性の熱しかもう残ってなくて
楽観的なこんな脳が　君を救うの　どうやって
見えない星は見えていない間
雲の中で隠れて待っているんだ

`,
            `
ベランダで実をつけた赤いプラム
泣いていた　あの子のくちびるに FAR FAR
昔の私なら何て言った
今の私に何なら歌えた FAR FAR
遠くなる

`,
            `
よくわかんないものにこだわって
守ってた殻しがみついて
弱い想像でまた泣いて
朝が来たって絶望して
今じゃなんとかうまくやって
守ってた殻はとうに無くて
眠ったら忘れたとかって
悔しかったって納得して

`,
            `
ベランダで実をつけた赤いプラム
泣いていた　あの子のくちびるに FAR FAR
昔の私なら何て言った
今の私に何なら歌えた FAR FAR

`,
            `
グラウンドに描かれた白いライン
開いては散りゆく花びらに FAR FAR
気付いたら置き去りでグンナイ
窓際　歌っていたムーンライト FAR FAR

`,
            `
遠くなって
連れ去って
遠くなって
`,
          ],
        },
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

const appReducer: Reducer<StateAppReducer, ActionAppReducer> = (state = initialState, action) => {
  switch (action.type) {
    case appReducerActions.oi: {
      return {...state, ...action.payload};
    }

    case appReducerActions.HANDLE_MUSIC_QUERY: {
      return {...state, query: action.payload.query};
    }

    case appReducerActions.SET_CURRENT_MUSIC: {
      return {...state, currentMusic: action.payload.currentMusic};
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;

import {Schema, Document} from 'mongoose';

export interface IMusics extends Document {
  artist: string;
  musics: {name: string; lyrics: string[][]}[];
}

export default new Schema({
  artist: {type: String, required: true, unique: true},
  musics: [
    {
      name: {type: String, required: true, unique: true},
      lyrics: [[{type: String}]],
    },
  ],
});

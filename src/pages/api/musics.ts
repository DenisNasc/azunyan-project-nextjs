// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import path from 'path';
import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {musicName, artist} = req.query;
  const musicPath = path.join(
    process.cwd(),
    `/src/assets/audios/${artist}/${artist}-${musicName}.mp3`
  );

  console.log('oii');
  const music = fs.readFileSync(musicPath);
  res.statusCode = 200;
  res.send(music);
};

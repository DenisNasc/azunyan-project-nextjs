import fs from 'fs';
import path from 'path';
import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {musicName, artist} = req.query;
  const {method} = req;

  switch (method) {
    case 'GET': {
      if (!musicName && !artist) {
        res.statusCode = 204;
        res.end();
        return;
      }

      const musicPath = path.join(
        process.cwd(),
        `/src/assets/audios/${artist}/${artist}-${musicName}.mp3`
      );

      const music = fs.readFileSync(musicPath);

      if (!music) {
        res.statusCode = 500;
        res.send(`não foi possível encontrar a música ${music} do artista ${artist}`);
        return;
      }

      res.statusCode = 200;
      res.send(music);
      break;
    }
    default: {
      break;
    }
  }
};

import type {NextApiRequest, NextApiResponse} from 'next';

import initializeMongo from 'database';
import MusicsSchema, {IMusics} from 'database/schemas/musics';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {method} = req;
  const {artist, musicName} = req.query;

  switch (method) {
    case 'GET': {
      if (!artist) {
        res.statusCode = 400;
        res.send('o parâmetro "artist" não foi definido');
        return;
      }

      try {
        const connection = await initializeMongo('azunyan-project');
        const musics = connection.model<IMusics>('musics', MusicsSchema);

        if (artist === 'all') {
          const resQuery = await musics.find();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(resQuery));

          return;
        }

        if (musicName) {
          const resQuery = await musics.find({artist: `${artist}`});
          const music = resQuery[0].musics.find(({name}) => name === musicName);

          res.statusCode = 200;
          res.end(JSON.stringify(music));
          return;
        }

        const resQuery = await musics.find({artist: `${artist}`});

        console.log(resQuery);

        if (!resQuery.length) {
          res.statusCode = 200;
          res.send(`não há informações do artista ${artist}`);
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resQuery));

        connection.close();
      } catch (error) {
        res.statusCode = 500;
        res.send(`Ocorreu um erro no servidor, com a seguinte mensagem ${error.message}`);
      }

      break;
    }
    default: {
      break;
    }
  }
};

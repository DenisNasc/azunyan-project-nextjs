import fs from 'fs';
import path from 'path';
import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {method} = req;

  switch (method) {
    case 'GET': {
      const {artist} = req.query;
      const imagePath = path.join(process.cwd(), `/src/assets/images/${artist}.jpg`);

      const image = fs.readFileSync(imagePath);

      if (!image) {
        res.statusCode = 500;
        res.send(`arquivo de imagem não encontrado para o artista ${artist}`);

        return;
      }
      res.statusCode = 200;
      res.send(image);
      break;
    }

    default: {
      break;
    }
  }
};

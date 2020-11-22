import fs from 'fs';
import path from 'path';
import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {artist} = req.query;
  const imagePath = path.join(process.cwd(), `/src/assets/images/${artist}.jpg`);

  const image = fs.readFileSync(imagePath);
  res.statusCode = 200;
  res.send(image);
};

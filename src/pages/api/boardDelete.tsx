import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../util/conn';
import kanbanModel from '../../components/ModelSchema/Schema';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connection();

    
    let result = await kanbanModel.deleteOne({ _id: req.body.id});

    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
   }
}

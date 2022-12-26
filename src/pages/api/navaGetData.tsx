import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../util/conn';
import kanbanModel from '../../components/ModelSchema/Schema';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connection();
    let result = await kanbanModel.find();

    if (result.length>0) {
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
  }
}

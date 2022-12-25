import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../util/conn';
import kanbanModel from '../../components/ModelSchema/Schema';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connection();
   await new kanbanModel()
   
     let result = await kanbanModel.insertMany({columns:[{title:req.body.name}]});
     console.log(result)
    //  let save = await result.save();
    if (result) {
      res.status(200).json('successfull save');
    }
  } catch (error) {
    console.log(error);
  }
}
// array convert into object
// const arrayOfObjects = arrayOfStrings.map((str, index) => ({id: index, value: str}));
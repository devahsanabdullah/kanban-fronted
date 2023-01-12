import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../util/conn';
import kanbanModel from '../../components/ModelSchema/Schema';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connection();
    console.log(req.body);
    
    let result = await kanbanModel.updateOne({_id:req.body._id},
        {$set:req.body})
       if(result)
       {
        res.send("succesful submit")

       }
    

   
  } catch (error) {
    console.log(error);
  }
}

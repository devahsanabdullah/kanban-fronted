import type { NextApiRequest, NextApiResponse } from "next";
import connection from "../../util/conn";
import kanbanModel from "../../components/ModelSchema/Schema";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

          await connection();
          console.log(req.body);
    let result = await new kanbanModel({ data: req.body });
    let data = await result.save();
      
    if (data) {
      res.status(200).json("successfull save");
    }
  } catch (error) {
    console.log(error);
  }
}

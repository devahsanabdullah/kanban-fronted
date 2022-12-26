import { models, model, Schema } from 'mongoose';
import { number } from 'yup';
const columnSchema: Schema = new Schema(
   {
              title: {
                type: String,
                require:true
                
              },
              id: {
                type: Number,
              }
});

const boardTitle: Schema = new Schema({

        
        data:{  title: {
            type: String,
           require:true
          },
          column: [columnSchema]}
        
      
});

const kanbanModel =models.kanban || model('kanban', boardTitle);

export default kanbanModel;

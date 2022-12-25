import { models, model, Schema } from 'mongoose';

const boardTitle: Schema = new Schema({
    columns: [
        {
          title: {
            type: String,
            required: true
          },
        //   cards: [
        //     {
        //       title: {
        //         type: String,
        //         required: true
        //       },
        //       description: {
        //         type: String
        //       }
        //     }
        //   ]
        }
      ]
});

const kanbanModel = models.todo || model('kanban', boardTitle);

export default kanbanModel;

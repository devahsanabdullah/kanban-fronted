import { models, model, Schema } from "mongoose";
import { number } from "yup";
const subtaskSchema: Schema = new Schema({
  title: {
    type: String,
    require: true,
  },
  isComplete: { type: Boolean, required: true },
});
const taskSchema: Schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  subtasks: [subtaskSchema],
});
const columnSchema: Schema = new Schema({
  title: {
    type: String,
    require: true,
  },
  id: {
    type: Number,
  },
  task: [taskSchema],
});

const boardTitle: Schema = new Schema({
  data: {
    title: {
      type: String,
      require: true,
    },
    column: [columnSchema],
  },
});

const kanbanModel = models.kanban || model("kanban", boardTitle);

export default kanbanModel;

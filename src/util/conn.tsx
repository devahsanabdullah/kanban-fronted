import mongoose from 'mongoose';

const monngodb_url = 'mongodb://127.0.0.1:27017/kanban-project';
export default function connection() {
  mongoose
    .connect(monngodb_url)
    .then(() => {
      console.log('database connected');
    })
    .catch((err:any) => {
      console.log(err);
    });
}

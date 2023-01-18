import mongoose,{ConnectOptions} from 'mongoose';

// const monngodb_url = 'mongodb://127.0.0.1:27017/kanban-project';
// export default function connection() {
//   mongoose
//     .connect(monngodb_url)
//     .then(() => {
//       console.log('database connected');
//     })
//     .catch((err:any) => {
//       console.log(err);
//     });
// }

const monngodb_url = 'mongodb+srv://ahsan:ahsan@cluster0.sbaxxrx.mongodb.net/?retryWrites=true&w=majority';
export default function connection() {
  try{
  mongoose.connect(
    monngodb_url,
    { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    () => console.log(" Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
  console.log(e)
}
}

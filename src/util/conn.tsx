import mongoose, { ConnectOptions } from "mongoose";
import { MongoClient } from 'mongodb'
const mongodb = require('mongodb');


const monngodb_url =
  "mongodb+srv://ahsan:ahsan@cluster0.sbaxxrx.mongodb.net/?retryWrites=true&w=majority";

export default function connection()
{
    let url:string = process.env.MONGODB_URI as string
    
    mongoose
      .connect(url )
      .then((res) => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err);
      });
    }
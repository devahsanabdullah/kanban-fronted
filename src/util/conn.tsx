import mongoose, { ConnectOptions } from "mongoose";
import { MongoClient } from 'mongodb'
const mongodb = require('mongodb');


  

export default function connection()
{
    let url = process.env.MONGODB_LINK 
    
    mongoose
      .connect(url as string  ,{ useNewUrlParser: true } as ConnectOptions)
      .then((res) => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err);
      });
    }
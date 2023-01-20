import mongoose, { ConnectOptions } from "mongoose";
import { MongoClient } from 'mongodb'
const mongodb = require('mongodb');

const monngodb_url =
  "mongodb+srv://ahsan:ahsan@cluster0.sbaxxrx.mongodb.net/?retryWrites=true&w=majority";

export default function connection()
{
    let url =
      "mongodb+srv://Muhammad_Akbar:Akbar.1234@cluster0.63uyc.mongodb.net/?retryWrites=true&w=majority";
    mongoose
      .connect(monngodb_url)
      .then((res) => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err);
      });
    }
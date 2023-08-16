import {config} from 'dotenv';
//dotenv.config()
// const result = require('dotenv').config({debug: process.env.PORT})
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./Index/index.js";
import { errorMiddleware } from './errorHandlermiddleware/error.js';
import cookieParser from 'cookie-parser';


config({
    path:"./Data/1.env"
})
const port = process.env.PORT || '3000';
const hostname = "localhost";
//const AtlasDB = "mongodb+srv://todos:DFkBdZR6IHKJWSjg@cluster0.r31pnzk.mongodb.net/todosDB?retryWrites=true&w=majority";

export const app = express();

app.use(cors(
    {
    origin:["http://localhost:3000"],
    methods: ["GET","POST","PUT", "DELETE" ],
    credentials:true
    }

));
app.use(express.json());
app.use(cookieParser())
app.use("/", route);
app.use(errorMiddleware);

mongoose.connect(process.env.ATLASS_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is connected to hostname ${hostname}:port ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`);
        })
    })
    .catch(error => console.log(error))


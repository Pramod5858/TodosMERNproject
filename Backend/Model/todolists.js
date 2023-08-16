import mongoose, { Schema } from "mongoose";
import users from "./users.js";

const SchemaTodos = new mongoose.Schema({
    userId:{type:Schema.Types.ObjectId, ref:users, required:true},
    name:{type:String, required:true},
    createdAt:{type:Date, default: Date.now},
    // Added:{type:Date, moment(createdAt).fromNow()}

})

export const todolists =mongoose.model("todolists", SchemaTodos);
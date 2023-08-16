//import { Jwt } from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";

const SchemaTodos = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    role: { type: String,enum:["admin","user"], default:"users" }
    //role:{type:String, enum:["admin","user"], default:"user"},

}, {
    timestamps: true
})

// Schema.methods.generateToken = function(){
//     return Jwt.sign({_id:this._id}, process.env.PRIVATEKEY, { expiresIn: "15d"})
// }

const users = mongoose.model("users", SchemaTodos);

export default users;
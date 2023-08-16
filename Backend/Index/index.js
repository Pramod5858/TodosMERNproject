import express from "express";
import { userSignUp, userlogin, userOtpVerify, getMyProfile, logout } from "../Controller/user.js";
import { isAdmin, verifytoken } from "../MiddleWare.js/verifytoken.js";
//import { gettodos } from "../Controller/todo.js";
import { Addtodos, deleteperticulartodos, getadminallProducts, getalltodos, getperticulartodos, updateperticulartodos } from "../Controller/todo.js"

const route = express.Router();

route.post("/todos/login", userlogin)

route.post("/todos/signup", userSignUp)

route.post("/todos/otpverify", userOtpVerify)

//route.get("/todos", gettodos)

//GET /todos, POST /todos, PUT /todos/:id, and DELETE /todos/

route.get("/todos/me", verifytoken, getMyProfile);

route.get("/logout", verifytoken, logout);

route.get("/todos/admin", verifytoken, isAdmin, getadminallProducts);

route.get("/todos", verifytoken, getalltodos)

route.post("/todos", verifytoken,isAdmin, Addtodos)

route.get("/todos/:id", verifytoken,isAdmin, getperticulartodos)

route.put("/todos/:id", verifytoken,isAdmin, updateperticulartodos)

route.delete("/todos/:id", verifytoken,isAdmin, deleteperticulartodos)

export default route
import jwt from "jsonwebtoken";
import { asynError } from "../errorHandlermiddleware/error.js";
import ErrorHandler from "../Utils/error.js";
import users from "../Model/users.js";

export const verifytoken = asynError(async (req, res, next) => {

    //    let token = req.headers['authorization']

    //console.log(req.cookies);

    console.log("you are ate verifytoken");

    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("not logged in", 401));
    }

    jwt.verify(token, process.env.PRIVATEKEY, (err, decoded) => {
        if (err) {
            res.status(401).send({ result: "Please check token or ther must be some editting happened" })
            //   return next(new ErrorHandler("Please check token or ther must be some editting happened", 490))
        } else {
            //console.log(decoded);
            const emailID = decoded.user.email;
            req.emailID = emailID;
            next();
        }
    })

})

export const isAdmin = asynError(async (req, res, next) => {

    try {

        console.log("you are ate verifytoken/isadmin");
        let email = req.emailID;

        let finddetails = await users.findOne({email})

        if(finddetails.role !== "admin") return next(new ErrorHandler("Only Admin is allowed", 401))

        console.log(finddetails);

        next()

    } catch (error) {
        res.send(error.message)
    }

})
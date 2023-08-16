import express from "express";
import { asynError } from "../errorHandlermiddleware/error.js";
import bcrypt, { compare } from "bcrypt";
import { otp1 } from "../Sample/OTP1.js";
import otpGenerate from "../Sample/otpGenerate.js";
import users from "../Model/users.js";
import otps from "../Model/otps.js";
import ErrorHandler from "../Utils/error.js"
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
//import { sendToken, sentToken } from "../Utils/features.js";

export const userSignUp = asynError(async (req, res, next) => {
    const { name, email, password, role } = req.body

    let findalreadyemail = await users.findOne({ email: email })



    if (findalreadyemail) {
        return next(new ErrorHandler("Allready email registered, please try with new email Id", 400))
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpassword = await bcrypt.hash(req.body.password, salt);

    const useradd = await users.create({
        name: name,
        email: email,
        password: hashpassword,
        role
    })

    const otp = otpGenerate(6);

    const sendOtp = otp1(otp, email);

    console.log(useradd);

    res.status(200).send({ success: true, useradd });
})

export const userOtpVerify = asynError(async (req, res, next) => {
    console.log(req.body);
    const { otpss, email } = req.body

    let findotps = await otps.findOne({ email: email })

    if (findotps.email !== req.body.email) {
        // res.send({message :"Email not found"})
        return next(new ErrorHandler("Email not found", 400))
    }

    if (findotps.otp !== otpss) {
        return next(new ErrorHandler("Enter OTP is not correct", 400))
        //            res.send({success:false, message:"not 1 matched"})
    }

    let findsetotps = await users.updateOne({
        email: email
    }, { $set: { verified: true } })

    console.log(findsetotps);


    res.status(200).send({ success: true, findsetotps });
})


export const userlogin = asynError(async (req, res, next) => {

    const { email, password } = req.body;

    let findemail = await users.findOne({ email })

    if (!findemail) {
        return next(new ErrorHandler("Email is not registered", 400))
    }

    let checkpassword = await bcrypt.compare(password, findemail.password,)

    if (!checkpassword) {
        return next(new ErrorHandler("password not match", 400))
    }

    let data = {
        user: {
            id: findemail.id,
            name: findemail.name,
            email: findemail.email,
            role:findemail.role
        }
    }

    //sendToken(user, res, "WelComeBack", `${user.name}`, 200)
    let token = Jwt.sign(data, process.env.PRIVATEKEY, { expiresIn: "15d" })

    console.log(data);

    res.status(200).cookie("token", token, { ...cookieOptions, expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), }).send({ success: true, token, role:data.user.role });
})

export const cookieOptions = {
    secure: process.env.NODE_ENV === "Development" ? false : true,
    httpOnly: process.env.NODE_ENV === "Development" ? false : true,
    sameSite: process.env.NODE_ENV === "Development" ? false : "none",
}


export const getMyProfile = asynError(async (req, res, next) => {

    console.log("Your are here 111");
    console.log(req.body);
    let emailID = req.emailID
    let details = await users.findOne({ email: emailID })

    res.status(200).send({ success: true, details });
})


export const logout = asynError(async (req, res, next) => {

    res.status(200).cookie("token", "", { ...cookieOptions, expires: new Date(Date.now()) }).send({ success: true, message: "Logout Successfully" });
})



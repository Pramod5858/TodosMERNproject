import { config } from 'dotenv';
config({
  path: "./Data/1.env"
})
import otps  from "../Model/otps.js"
//import OTP from "../Model/otp";
import nodemailer from 'nodemailer';

export const otp1 = async (otp, email) => {
  try {
    const findsetEmail = await otps.create({ email: email, otp: otp });
    //     const parsed = { Email: AUTH_EMAIL }
    // const target = { Passw: AUTH_PASS }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      }
    });

    var mailOptions = {
      from: 'youremail@gmail.com',
      to: email,
      subject: 'Sending otp to verify',
      text: 'Thi is your: ' + otp
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    return true


  } catch (error) {
    console.log(error);
  }

}


//module.exports = OTP1
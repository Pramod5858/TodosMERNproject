import mongoose from "mongoose";

const SchemaOTP = new mongoose.Schema({
    email: { type: String, required: true,  },
    otp: { type: String, required: true, unique: true },
}, {
    timestamps: true
})

SchemaOTP.index({createdAt:1},{expireAfterSeconds:300})

const otps = mongoose.model("otp", SchemaOTP);

export default otps
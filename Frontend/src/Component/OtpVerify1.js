import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function OtpVerify1() {

    const navigate = useNavigate()
    const [otpss, setOtpss] = useState("")
    const [email, setEmail] = useState("")

    const HandleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, otpss);

        await axios.post("http://localhost:5000/todos/otpverify", {
            email, otpss
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response)=>{
                if(!response.data.success){
                    alert("OTP or email is not matching, please check")
                }
                alert("Congratulation your account create know you can do Login")
                navigate("/login")
            }    
                )
            .catch((error) => {console.log(error)
                alert(error.response.data.message)}
            )

    }

    return (

        <form onSubmit={HandleSubmit}>
            <div className="mb-3">
                <label className="form-label" >Verify</label>
            </div>

            <div className="mb-3">
                <label className="form-label" >EmailId</label>
                <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label" >OTP</label>
                <input type="password" className="form-control" name='otpss' value={otpss} onChange={(e) => setOtpss(e.target.value)} />
            </div>

            <input className='btn btn-primary' type='submit' />

        </form>


    )
}

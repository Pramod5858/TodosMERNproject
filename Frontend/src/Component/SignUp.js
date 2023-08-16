import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function SignUp() {

    const navigate = useNavigate()


    const [role, setRole] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //const [data, setData] = useState([])

    axios.defaults.withCredentials = true

    const HandleSIgnUpRegisteration = async (e) => {

        if (role === "admin" && secretKey !== "admin") {
            e.preventDefault();
            alert("Invalid admin")
        }

        e.preventDefault();
        console.log(name, email, password, role);
        await axios.post("http://localhost:5000/todos/signup",
            {
                name,
                email,
                password,
                role

            },
            {
                Headers: {
                    "Content-Type": "application/json"
                },
            }

        ).then((response) => {
            console.log(response.data);
            if (response.message) {
                alert("some this in missing")
                alert(response.message)
            }
            alert("otp is sent and need to verify ")
            navigate("/otpverify1")

        })
            .catch((error) => {
                // console.log(error.response.data.success)
                // console.log(error.response.data.message)
                alert(error.response.data.message)
            })
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/image3.jpg" className="d-block w-100" alt="No image11 found1" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image4.jpg" className="d-block w-100" alt="No image12 found2" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image5.jpg" className="d-block w-100" alt="No image13 found3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col'>
                    <div>
                        <form onSubmit={HandleSIgnUpRegisteration} >
                            <div className="mb-3">
                                <label className="form-label" >Sign Up</label>
                            </div>
                            <div>
                                Register as
                                <input className="form-check-input" type="radio" name="role" value="user" onChange={(e) => setRole(e.target.value)} />user

                                <input className="form-check-input" type="radio" name="role" value="admin" onChange={(e) => setRole(e.target.value)} />admin
                            </div>
                            {role === "admin" ?
                                <div className="mb-3">
                                    <label className="form-label" >Secret key</label>
                                    <input type="text" className="form-control" name='secretKey' value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
                                </div>
                                : null}



                            <div className="mb-3">
                                <label className="form-label" >Name</label>
                                <input type="text" className="form-control" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label" >Email</label>
                                <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" name='email' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type='submit' />
                            {/* <button type="submit" className="btn btn-primary" disabled={name === "" || email === "" || password === ""} onClick={() => HandleSIgnUpRegisteration({ name, email, password })} >Verify email otp sent to emailId</button> */}
                        </form>
                    </div>
                </div>

                <div className='col'>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/image6.jpg" className="d-block w-100 img-fluid" alt="No image1 found11" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image7.jpg" className="d-block w-100 img-fluid" alt="No image2 found12" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image8.jpg" className="d-block w-100 img-fluid" alt="No image3 found13" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


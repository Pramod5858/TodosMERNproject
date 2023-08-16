import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function Login() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [modalView, setModalView] = useState(false)

    axios.defaults.withCredentials = true
    const HandleLogin = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/todos/login", {
            email, password
        },
            {
                Headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => {
                console.log(response);
                console.log(response.data.success);
                localStorage.setItem("token", JSON.stringify(response.data.token))
                if (response.data.success === true) {
                    if (response.data.role === "admin") {
                        alert("your are ate dashboard")
                        navigate("/dashboard")
                    } else {
                        alert("your are ate Home");
                        navigate("/home")
                    }
                }
                //                alert(response.data.message)
                // console.log(email)
                // localStorage.setItem("token", JSON.stringify(response.data.token))
                // localStorage.setItem("email", email)
                // alert("LoggedIn Successfully");
                // navigate("/home")
            })
            .catch(error => {
                console.log(error)
                alert("error")
            })

    }


    // const toggle = () => {
    //     setModalView(!modalView)
    // }

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
                    <form onSubmit={HandleLogin}>
                        <div className="mb-3">
                            <label className="form-label" >Login</label>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" >Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name='email' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={email === "" || password === ""} >Login</button>
                        <span> If you Dont Have account ? <p><a href="/signup" className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Sign Up</a></p></span>
                    </form>

                </div>
                <div className='col'>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/image6.jpg" className="d-block w-100" alt="No image1 found11" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image7.jpg" className="d-block w-100" alt="No image2 found12" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image8.jpg" className="d-block w-100" alt="No image3 found13" />
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
            {/* ******* */}
            {/* <Modal
                isOpen={modalView}
                toggle={toggle}
            >
                <ModalHeader toggle={toggle} >Sign Up</ModalHeader>
                <ModalBody>
                    <HandleSignUp />
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-dark" onClick={toggle}>Close</button>
                </ModalFooter>


            </Modal> */}


            {/* ******* */}


        </div>
    )
}


// const HandleSignUp = () => {
//     return (
//         <div>Hi HandleSignUp</div>
//     )
// }
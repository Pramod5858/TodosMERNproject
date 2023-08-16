import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css";
//import './App.css';

export default function Home() {

    const [details, setdetails] = useState([])
    // const [name, setName] = useState([])

    //    let isAdmin = false

    useEffect(() => {
        getDetails()
    }, [])

    axios.defaults.withCredentials = true;
    const getDetails = async () => {

        // await axios.get(`http://localhost:5000/todos/${isAdmin ? "admin" : "me"}`)
        await axios.get("http://localhost:5000/todos")
            .then(res => {
                console.log(res);
                setdetails(res.data.response)
            })
            .catch(error => {
                console.log(error)
                alert(error.response.data.message)
            })
    }

    // const styles2 = {
    //     width: 400,
    //     height: 400,
    //     backgroundColor: "lightblue",
    //     justifyContent:"center"
    // }

    //<div className="styles2"> this is for external css
    //<div style={styles2}> &&     const styles2 = {   backgroundColor: "lightblue",width: 400,height: 400,} this is for internal
    //<div style={{backgroundColor: "lightblue",width: 400,height: 400}}> this is for inline        


    //    Define the components for the todo list, such as TodoList, TodoItem, and TodoForm.

    return (
        <div className='container-fluid' >
            <div className="border border-5">
                <div >
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/image12.jpg" className="d-block w-100" alt="not found1" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image13.jpg" className="d-block w-100" alt="not found2" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/image14.jpg" className="d-block w-100" alt="not found3" />
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
                <div>
                    <div className='row'>
                        <div className='col'>
                            <h3 style={{ flexDirection: "column" }} >theTodos;</h3>
                        </div>
                    </div>

                    <div className="border border-success p-2 mb-2">
                        <div className='row'>
                            {details.length ? details.map((item) => {
                                return (
                                    <div key={item._id} className="border border-success p-2 mb-2">
                                        <div className='row'>
                                            <div className='col'>
                                                <div><h6>My new todo</h6></div>
                                                <div><p>Auther: <span>{item.name}</span></p></div>
                                                <div><p>Added: <span>{item.createdAt}</span></p></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            ) : null}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}


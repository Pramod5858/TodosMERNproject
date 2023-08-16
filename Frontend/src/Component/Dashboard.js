import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Home.css";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

//import { Modal, ModalBody, ModalHeader } from 'reactstrap';


export default function Dashboard() {

    const [details, setdetails] = useState([])
    const [setdata, setSetData] = useState(undefined)
    const [modalView, setModalView] = useState(false)

    //    let isAdmin = false

    useEffect(() => {
        getDetails()
    }, [])

    axios.defaults.withCredentials = true;
    const getDetails = async () => {
        // await axios.get(`http://localhost:5000/todos/${isAdmin ? "admin" : "me"}`)
        await axios.get("http://localhost:5000/todos/admin")
            .then(response => {
                setdetails(response.data.findAdminDetails)
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


    const HandleDelete = async (id) => {
        console.log("You clicked on Delete");
        console.log(id);
        await axios.delete(`http://localhost:5000/todos/${id}`)
            .then(res => {
                console.log(res)
                alert(res.data.success)
                getDetails()

            })
            .catch(error => console.log(error.message))
    }

    const toggle = (id) => {
        console.log("You clicked on Update");
        setSetData(id)
        setModalView(!modalView)
    }

    return (
        <div className='container-fluid' >
            <div className="border border-5">
                <div className="border border-success p-2 mb-2">
                    <div className='row' >
                        <div className='col'><input className="form-control" type='text' /></div>
                        <div className='col'><button type="button" className="btn btn-primary"><ion-icon name="arrow-forward-circle-outline"></ion-icon></button></div>
                    </div>

                </div>
                <div>
                    <div className='row'>
                        <div className='col'>
                            <h3 style={{ flexDirection: "column" }} >theTodos;</h3>
                        </div>
                        <div className='col'>
                            <p><a href="/add" className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Addition</a></p>
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
                                            <div className='col'>
                                                <div className="btn-group me-2" role="group" aria-label="First group">
                                                    <button type="button" className="btn btn-outline-secondary"><ion-icon name='checkmark-circle-sharp'></ion-icon></button>
                                                    <button type="button" className="btn btn-outline-secondary" onClick={() => toggle(item)}><ion-icon name="pencil-sharp"></ion-icon></button>
                                                    <button type="button" className="btn btn-outline-secondary" onClick={() => HandleDelete(item._id)} ><ion-icon name="trash-outline"></ion-icon></button>

                                                </div>
                                                <Modal isOpen={modalView} toggle={toggle} >
                                                    <ModalHeader toggle={toggle}>Edit</ModalHeader>
                                                    <ModalBody>
                                                        <HandleEdit setdata={setdata} setModalView={setModalView} getDetails={getDetails} />
                                                    </ModalBody>
                                                </Modal>

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

function HandleEdit({ setdata, getDetails, setModalView }) {
    const [name, setName1] = useState("")
    console.log(setdata);
    useEffect(() => {
        setName1(setdata.name)

    }, [setdata])

    const HandleSave = async (e) => {
        e.preventDefault()
        console.log("You clicked on Handle Save");
        console.log(name);
        const id = setdata._id;

        await axios.put(`http://localhost:5000/todos/${id}`, {
            name
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
            .then(res => {
                console.log(res)
                //alert(res.data.success)
                setModalView(false)
                getDetails()
            })
            .catch(error => console.log(error.data.error))


    }

    return (

        <form onSubmit={HandleSave}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={name} onChange={(e) => setName1(e.target.value)} />

            </div>
            <button type="submit" className="btn btn-primary" disabled={name === ""}>Submit</button>
        </form>

    )

}


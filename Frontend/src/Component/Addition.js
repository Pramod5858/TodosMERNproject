import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Addition() {
  const [name, setEname] = useState("")
const navigate = useNavigate()

  console.log("You clicked on Addition button");
  axios.defaults.withCredentials = true
  const HandleAdd = async (e) => {
    e.preventDefault()
    console.log(name);
    console.log("You clicked on handle save btn");

    await axios.post("http://localhost:5000/todos", {
      name
    },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => {
        console.log(res)
        alert(res.data.message.name)
        navigate("/dashboard")
      })
      .catch(error => console.log(error.data.message))
  }

  return (
    <div>
      <form onSubmit={HandleAdd}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name='ename' value={name} onChange={(e) => setEname(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" disabled={name === ""} >Add</button>
      </form>
    </div>
  )
}

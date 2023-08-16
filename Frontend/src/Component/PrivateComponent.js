import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function PrivateComponent() {
    const navigate = useNavigate()
    let auth = localStorage.getItem("token")


    return auth ? <Outlet/> : navigate('/login')
}

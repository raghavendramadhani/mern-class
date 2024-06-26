import React, { useState } from 'react'
import axios from "axios"
export default function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("")
    console.log(userDetails)

    const handleChage = (e) => {
        const { value, name } = e.target
        console.log(name, value)

        setUserDetails((ps) => ({ ...ps, [name]: value }))
    }

    const formSubmit = (e) => {
        e.preventDefault()
    }

    const PostData = async () => {
        try {
            const res = await axios.post("http://localhost:5000/login", userDetails)
            console.log(res)
            localStorage.setItem("Token",res.data.token)
        } catch (error) {
            setErrorMessage(error.response.data.message)
            console.log(error)
        }
    }

    const getToken=localStorage.getItem("Token")
    console.log(getToken)
    return (
        <div className='reg-form'>
            {errorMessage && <p>{errorMessage}</p>}
            <form className='reg-form' onSubmit={formSubmit}>
                <input type='email' placeholder='email' value={userDetails.email} name="email" onChange={handleChage} required />
                <input type='password' placeholder='password' value={userDetails.password} name="password" onChange={handleChage} required />
                <button onClick={PostData}>Login</button>
            </form>
        </div>
    )
}

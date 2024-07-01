import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../../App.css'; // Import your CSS file

export default function Login({ Login }) {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
    };

    const postData = async () => {
        try {
            const res = await axios.post("http://localhost:5000/login", userDetails);
            if (res.data.success === true) {
                localStorage.setItem("Token", res.data.token);
                Login();
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div className='login-container'>
            {errorMessage && <p>{errorMessage}</p>}
            <form className='login-form' onSubmit={formSubmit}>
                <input type='email' placeholder='Email' value={userDetails.email} name="email" onChange={handleChange} required />
                <input type='password' placeholder='Password' value={userDetails.password} name="password" onChange={handleChange} required />
                <button type="button" onClick={postData}>Login</button>
            </form>
            <Link to="/register">Register</Link>
        </div>
    );
}

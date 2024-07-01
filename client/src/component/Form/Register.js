import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
    };

    const postData = async () => {
        try {
            const res = await axios.post("http://localhost:5000/register", userDetails);
            if (res.data.success === true) {
                navigate("/");
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
            console.log(error);
        }
    };

    return (
        <div className='reg-container'>
            {errorMessage && <p>{errorMessage}</p>}
            <form className='reg-form' onSubmit={formSubmit}>
                <input type='text' placeholder='Name' value={userDetails.name} name="name" onChange={handleChange} required />
                <input type='email' placeholder='Email' value={userDetails.email} name="email" onChange={handleChange} required />
                <input type='password' placeholder='Password' value={userDetails.password} name="password" onChange={handleChange} required />
                <button type="button" onClick={postData}>Register</button>
            </form>
        </div>
    );
}

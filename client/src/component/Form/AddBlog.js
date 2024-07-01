import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../../App.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    const location = useLocation();
    const [userDetails, setUserDetails] = useState({
        title: "",
        description: "",
        image: ""
    });
    const extractedData = location.state || {};
    const id = extractedData[0]?._id;
    const actionCheck = location.state?.[1] || "";
    const [errorMessage, setErrorMessage] = useState("");
    const getToken = localStorage.getItem("Token");

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            if (actionCheck === "Update") {
                const res = await axios.patch(`http://localhost:5000/update/${id}`, userDetails, {
                    headers: {
                        "token": getToken
                    }
                });
                if (res.data.success === true) {
                    navigate("/myblogs");
                }
            } else {
                const res = await axios.post("http://localhost:5000/createBlog", userDetails, {
                    headers: {
                        "token": getToken
                    }
                });
                console.log(res);
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
            console.log(error);
        }
    };

    useEffect(() => {
        if (extractedData[0]) {
            setUserDetails({
                title: extractedData[0].title,
                description: extractedData[0].description,
                image: extractedData[0].image
            });
        }
    }, [extractedData]);

    return (
        <div className='blog-container'>
            <div className='error-message'>{errorMessage}</div>
            <form className='blog-form' onSubmit={formSubmit}>
                <input type='text' placeholder='Title' value={userDetails.title} name="title" onChange={handleChange} required />
                <input type='text' placeholder='Description' value={userDetails.description} name="description" onChange={handleChange} required />
                <input type='text' placeholder='Image URL' value={userDetails.image} name="image" onChange={handleChange} required />
                <button type="submit">{actionCheck === "Update" ? "Update" : "Add"} Blog</button>
            </form>
        </div>
    );
}

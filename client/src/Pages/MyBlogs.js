import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css'; // Import CSS file for component styling
import { useNavigate } from 'react-router-dom';

export default function MyBlogs() {
    const [blogs, setBlogs] = useState([]);
    const getToken = localStorage.getItem("Token");
    const navigate = useNavigate();

    const getBlogs = async () => {
        try {
            const res = await axios.get("http://localhost:5000/mydetails", {
                headers: {
                    "token": getToken
                }
            });
            setBlogs(res.data.user.MyBlogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const deleteBlog = async (val) => {
        try {
            const res = await axios.delete(`http://localhost:5000/Delete/${val._id}`, {
                headers: {
                    "token": getToken
                }
            });
            getBlogs();
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const updateBlog = (val) => {
        let action = "Update";
        navigate("/addblog", { state: [val, action] });
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="my-blogs-container">
            {blogs.map((val) => (
                <div key={val._id} className="blog-item">
                    <h1 className="blog-title">{val.title}</h1>
                    <img src={val.image} alt={val.title} className="blog-image" />
                    <p>{val.description}</p>
                    <button onClick={() => deleteBlog(val)} className="delete-button">Delete</button>
                    <button onClick={() => updateBlog(val)} className="edit-button">Edit</button>
                </div>
            ))}
        </div>
    );
}

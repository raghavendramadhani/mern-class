import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AllBlogs() {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        try {
            const res = await axios.get("http://localhost:5000/allBlogs");
            setBlogs(res.data.Blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <div className="all-blogs-container">
            {blogs.map((val, index) => (
                <div key={index} className="blog-item">
                    <h1 className="blog-title">{val.title}</h1>
                    <img src={val.image} alt={val.title} className="blog-image" />
                    <p className="blog-description">{val.description}</p>
                </div>
            ))}
        </div>
    );
}

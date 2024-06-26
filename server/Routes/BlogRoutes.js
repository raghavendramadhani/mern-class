import { Router } from "express";
import { AllBlogs, CreateBlog, DleteBlog, UpdateBlog } from "../controllers/BlogController.js";

const BlogRoute=Router()

BlogRoute.post('/createBlog/:id',CreateBlog)
BlogRoute.get('/allBlogs',AllBlogs)
BlogRoute.patch('/update/:id',UpdateBlog)
BlogRoute.delete("/Delete/:id",DleteBlog)
export default BlogRoute
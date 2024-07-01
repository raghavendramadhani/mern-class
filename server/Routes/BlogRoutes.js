import { Router } from "express";
import { AllBlogs, CreateBlog, DleteBlog, UpdateBlog } from "../controllers/BlogController.js";
import verifyToken from "../middleware.js";

const BlogRoute=Router()

BlogRoute.post('/createBlog',verifyToken,CreateBlog)
BlogRoute.get('/allBlogs',AllBlogs)
BlogRoute.patch('/update/:id',UpdateBlog)
BlogRoute.delete("/Delete/:id",verifyToken,DleteBlog)
export default BlogRoute
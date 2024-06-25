import { Router } from "express";
import { CreateBlog } from "../controllers/BlogController.js";

const BlogRoute=Router()

BlogRoute.post('/createBlog/:id',CreateBlog)

export default BlogRoute
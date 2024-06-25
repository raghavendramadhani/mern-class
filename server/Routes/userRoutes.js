import { Router } from "express";
import { createUser, getMyDetails, login } from "../controllers/UserController.js";

const routes = Router()
routes.post("/register", createUser)
routes.post("/login", login)
routes.get("/mydeatils/:id", getMyDetails)
export default routes
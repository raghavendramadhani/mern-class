import { Router } from "express";
import { createUser, getMyDetails, login } from "../controllers/UserController.js";
import verifyToken from "../middleware.js";

const routes = Router()
routes.post("/register", createUser)
routes.post("/login", login)
routes.get("/mydetails",verifyToken, getMyDetails)
export default routes
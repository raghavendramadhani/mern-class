import { Router } from "express";
import { CreareUser, Login } from "../controllers/UserController.js";

const routes = Router()
routes.post("/register",CreareUser)
routes.post("/login",Login)

export default routes
import { Router } from "express";
import { CreareUser, GetMydetails, Login } from "../controllers/UserController.js";

const routes = Router()
routes.post("/register",CreareUser)
routes.post("/login",Login)
routes.get("/mydeatils/:id",GetMydetails)
export default routes
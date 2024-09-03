import { Router } from "express";
import { createUser } from "./user.control";

const route = Router();

route.post("/create", createUser);



export const userRoute = route
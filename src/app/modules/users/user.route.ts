import { Router } from "express";
import { createUser } from "./user.control";

const router = Router();

router.post("/create", createUser);



export const userRoute = router
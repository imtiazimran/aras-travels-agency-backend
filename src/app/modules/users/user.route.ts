import { Router } from "express";
import { getAllUsers } from "./user.control";
import isAuth from "../../middlewares/auth";

const router = Router();

router.get("/all", isAuth(), getAllUsers);



export const userRoute = router
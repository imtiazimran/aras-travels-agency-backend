import { Router } from "express";
import { getAllUsers, getMe, updateUser } from "./user.control";
import isAuth from "../../middlewares/auth";

const router = Router();

router.get("/all", isAuth(), getAllUsers);
router.get("/me", isAuth(), getMe);
router.put("/update", isAuth(), updateUser);


export const userRoute = router
import { Router } from "express";
import { userRoute } from "../modules/users/user.route";

const router = Router();

const modulesRoutes = [
    {
        path: "/user",
        route: userRoute
    }
];

modulesRoutes.forEach((route) => router.use(route.path, route.route))

export default router
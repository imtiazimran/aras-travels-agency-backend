import { Router } from "express";
import { userRoute } from "../modules/users/user.route";
import { jobRoute } from "../modules/jobs/job.route";

const router = Router();

const modulesRoutes = [
    {
        path: "/user",
        route: userRoute
    },
    {
        path: "/job",
        route: jobRoute
    }
];

modulesRoutes.forEach((route) => router.use(route.path, route.route))

export default router
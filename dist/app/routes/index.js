"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/users/user.route");
const job_route_1 = require("../modules/jobs/job.route");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: "/user",
        route: user_route_1.userRoute
    },
    {
        path: "/job",
        route: job_route_1.jobRoute
    }
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

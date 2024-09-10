"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRoute = void 0;
const express_1 = require("express");
const job_controller_1 = require("./job.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.post("/create", (0, auth_1.default)(), job_controller_1.createJob);
router.get("/all", (0, auth_1.default)(), job_controller_1.getAllJobs);
router.get("/:id", (0, auth_1.default)(), job_controller_1.getJobById);
router.put("/:id", (0, auth_1.default)(), job_controller_1.updateJobById);
router.delete("/:id", (0, auth_1.default)(), job_controller_1.deleteJobById);
exports.jobRoute = router;

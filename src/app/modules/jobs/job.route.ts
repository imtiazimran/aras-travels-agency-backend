import { Router } from "express";
import { createJob, deleteJobById, getAllJobs, getJobById, updateJobById } from "./job.controller";
import isAuth from "../../middlewares/auth";

const router = Router();

router.post("/create", isAuth(), createJob);
router.get("/all", isAuth() , getAllJobs);
router.get("/:id", isAuth(),  getJobById);
router.put("/:id", isAuth(), updateJobById);
router.delete("/:id", isAuth(), deleteJobById);

export const jobRoute = router
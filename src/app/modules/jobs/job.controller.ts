import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createJobInDB, deleteJobByIdInDB, getAllJobsFromDB, getJobByIdFromDB, updateJobByIdInDB } from "./job.service";

export const createJob = catchAsync(async (req, res) => {
    const job = await createJobInDB(req.body);
    return sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Job Created Successfully",
        data: job
    });
})

export const getAllJobs = catchAsync(async (req, res) => {
    const jobs = await getAllJobsFromDB();
    return sendResponse(res, { // add return to stop further execution
        statusCode: 200,
        success: true,
        message: "Jobs Retrieved Successfully",
        data: jobs
    });
})

export const getJobById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const job = await getJobByIdFromDB(id);
    return sendResponse(res, { // add return to stop further execution
        statusCode: 200,
        success: true,
        message: "Job Retrieved Successfully",
        data: job
    });
})

export const updateJobById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const job = await updateJobByIdInDB(id, req.body);
    return sendResponse(res, { // add return to stop further execution
        statusCode: 200,
        success: true,
        message: "Job Updated Successfully",
        data: job
    });
})

export const deleteJobById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const job = await deleteJobByIdInDB(id);
    return sendResponse(res, { // add return to stop further execution
        statusCode: 200,
        success: true,
        message: "Job Deleted Successfully",
        data: job
    });
})
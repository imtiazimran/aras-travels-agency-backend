import { Job } from "./job.model"
import { TJob } from "./job.validation"

export const createJobInDB = async (data: TJob) => {
    return await Job.create(data)
}

export const getAllJobsFromDB = async () => {
    return await Job.find()
}

export const getJobByIdFromDB = async (id: string) => {
    return await Job.findById(id)
}

export const updateJobByIdInDB = async (id: string, data: TJob) => {
    return await Job.findByIdAndUpdate(id, data, { new: true })
}

export const deleteJobByIdInDB = async (id: string) => {
    return await Job.findByIdAndDelete(id)
}
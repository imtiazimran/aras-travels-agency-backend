import { model, Schema } from "mongoose";
import { TJob } from "./job.validation";

const jobSchema = new Schema<TJob>({
    title: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    minimum: {
        type: Number,
        required: true
    },
    maximum: {
        type: Number,
        required: true
    },
    job_type: {
        type: String,
        required: true,
        enum: ["full_time", "part_time", "contract"]
    },
    vacancy: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["active", "closed"],
    }
}, { timestamps: true });

export const Job = model<TJob>("Job", jobSchema);
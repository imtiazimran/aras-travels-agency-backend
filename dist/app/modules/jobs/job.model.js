"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = require("mongoose");
const jobSchema = new mongoose_1.Schema({
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
    salary_range: {
        type: Number,
        required: true
    },
    job_type: {
        type: String,
        required: true,
        enum: ["full_time", "part_time", "contract"]
    },
    status: {
        type: String,
        required: true,
        enum: ["active", "closed"],
    }
}, { timestamps: true });
exports.Job = (0, mongoose_1.model)("Job", jobSchema);

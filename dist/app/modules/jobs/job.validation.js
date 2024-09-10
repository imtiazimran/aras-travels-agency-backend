"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobSchema = void 0;
const zod_1 = require("zod");
const jobSchema = zod_1.z.object({
    title: zod_1.z.string(),
    country: zod_1.z.string(),
    description: zod_1.z.string(),
    requirement: zod_1.z.string(),
    salary_range: zod_1.z.number(),
    job_type: zod_1.z.string(),
    status: zod_1.z.string(),
});
exports.jobSchema = jobSchema;

import { z } from "zod";

const jobSchema = z.object({
    title: z.string(),
    country: z.string(),
    description: z.string(),
    requirement: z.string(),
    salary_range: z.number(),
    job_type: z.string(),
    status: z.string(),

})

type TJob = z.infer<typeof jobSchema>;
export { jobSchema, TJob }
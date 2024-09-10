import { z } from "zod";

const jobSchema = z.object({
    title: z.string(),
    country: z.string(),
    description: z.string(),
    requirement: z.string(),
    minimum: z.number(),
    maximum: z.number(),
    job_type: z.string(),
    vacancy: z.number(),
    status: z.string(),

})

type TJob = z.infer<typeof jobSchema>;
export { jobSchema, TJob }
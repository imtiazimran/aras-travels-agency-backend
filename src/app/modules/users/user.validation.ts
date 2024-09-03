import { z } from "zod";

const userSchema = z.object({
        email: z.string().email(),
        name: z.string(),
        role: z.string()
})

type TUser = z.infer<typeof userSchema>;
export { userSchema, TUser }
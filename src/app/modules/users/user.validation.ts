import { z } from "zod";

const userSchema = z.object({
        email: z.string().email(),
        name: z.string(),
        picture: z.string().optional(),
        number: z.string().optional(),
        address: z.string().optional(),
        role: z.string()
})

type TUser = z.infer<typeof userSchema>;
export { userSchema, TUser }
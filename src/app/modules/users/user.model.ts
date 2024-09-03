import { model, Schema } from "mongoose";
import { TUser } from "./user.validation";

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin", "moderator"],
        default: "user"

    }
})

export const User = model<TUser>("User", userSchema)
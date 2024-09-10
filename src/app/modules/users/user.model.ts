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
    picture: {
        type: String,
        
    },
    number: {
        type: String,
        unique: true

    },
    address: {
        type: String,

    },
    role: {
        type: String,
        enum: ["user", "admin", "candidate"],
        default: "user"

    }
}, { timestamps: true }); 

export const User = model<TUser>("User", userSchema)
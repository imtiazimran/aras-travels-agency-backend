"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
exports.User = (0, mongoose_1.model)("User", userSchema);

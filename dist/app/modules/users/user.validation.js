"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string(),
    picture: zod_1.z.string().optional(),
    number: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    role: zod_1.z.string()
});
exports.userSchema = userSchema;

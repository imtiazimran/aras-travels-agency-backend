"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const user_control_1 = require("./user.control");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = (0, express_1.Router)();
router.get("/all", (0, auth_1.default)(), user_control_1.getAllUsers);
router.get("/me", (0, auth_1.default)(), user_control_1.getMe);
router.put("/update", (0, auth_1.default)(), user_control_1.updateUser);
exports.userRoute = router;

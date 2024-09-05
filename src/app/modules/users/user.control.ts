import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "./user.model";
import { getAllUsersFromDB } from "./user.service";

export const createUser = catchAsync(async (req, res) => {
    const {name, email, role} = req.body
    const user = await User.create({name, email, role})

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User Created Successfully",
        data: user
    })
})

export const getAllUsers = catchAsync(async (req, res) => {
    const users = await getAllUsersFromDB()
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Users Retrieved Successfully",
        data: users
    })
})
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "./user.model";

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
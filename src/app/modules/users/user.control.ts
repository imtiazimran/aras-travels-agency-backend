import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { createUserInDB, getAllUsersFromDB, getMeFromDB, updateUserInfoInDB } from "./user.service";
import { TUser } from "./user.validation";


export const createUser = catchAsync(async (req, res) => {
    const user = await createUserInDB(req.body);
    return sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User Created Successfully",
        data: user
    });
})

export const getAllUsers = catchAsync(async (req, res) => {
    const users = await getAllUsersFromDB();
    return sendResponse(res, { // add return to stop further execution
        statusCode: 200,
        success: true,
        message: "Users Retrieved Successfully",
        data: users
    });
});

export const getMe = catchAsync(async (req, res) => {
    const { email } = req.user!;
    const user = await getMeFromDB(email);
    return sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User Retrieved Successfully",
        data: user
    });
});

export const updateUser = catchAsync(async (req, res) => {
    const { email } = req.user!;
    const data = req.body
    const user = await updateUserInfoInDB(
        email as unknown as string,
        data as unknown as TUser
    );
    console.log("controller", user);
    return sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User Updated Successfully",
        data: user
    });
});

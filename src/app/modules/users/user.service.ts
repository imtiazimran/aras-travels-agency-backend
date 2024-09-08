import { User } from "./user.model"
import { TUser } from "./user.validation"

export const createUserInDB = async (data: TUser) => {
    return await User.create(data)
}

export const getAllUsersFromDB = async () => {
    return await User.find()
}

export const getMeFromDB = async (email: string) => {
    return await User.findOne({email})
}

export const updateUserInfoInDB = async (email : string, data : TUser) => {
    return await User.findOneAndUpdate({email}, data, {new: true})
}
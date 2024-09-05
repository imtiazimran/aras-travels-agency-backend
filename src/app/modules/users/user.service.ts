import { User } from "./user.model"


export const getAllUsersFromDB = async () => {
    return await User.find()
}
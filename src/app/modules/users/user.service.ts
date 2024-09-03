import { User } from "./user.model"
import { TUser } from "./user.validation"

export const createUserInDB = async (user: TUser) => {
     return await User.create(user)
}
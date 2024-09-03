import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../errors/AppError"
import jwt, { JwtPayload } from "jsonwebtoken"
import { User } from "../modules/users/user.model"


const auth = () => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            throw new AppError(401, "Unauthorized Token Not Provided")
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload

        const {role, userId} = decoded

        const user = await User.findOne(userId)

        if (!user) {
            throw new AppError(401, "Unauthorized User Not Found")
        }

        req.user = user



        next()
    })
}

export default auth
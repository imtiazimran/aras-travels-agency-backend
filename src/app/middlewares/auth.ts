import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/users/user.model";
import { jwtDecode } from "jwt-decode";
import { createUser } from "../modules/users/user.control";


const isAuth = () => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization?.split(" ")[1] || req.body.token || req.query.token;

        if (!token) {
            throw new AppError(401, "Unauthorized Token Not Provided");
        }

        try {

            const decoded: JwtPayload = jwtDecode(token)
            if (!decoded || !decoded.email) {
                throw new AppError(401, "Error happened while verifying token");
            }

            const email = decoded.email;
            let user = await User.findOne({ email });
            if (!user) {
                user = await User.create(decoded)
            }

            req.user = user;
            next();
        } catch (error) {
            console.log("error", error);
            throw new AppError(401, "Unauthorized Something went wrong in auth middleware");
        }
    });
};

export default isAuth;

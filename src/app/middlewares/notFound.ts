import { error } from "console";
import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next:NextFunction) =>{
    return res.status(404).json({
        success: false,
        message: "Route not found",
        error: ""
    })
};

export default notFound
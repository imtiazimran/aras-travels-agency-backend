import { ZodError } from "zod"
import { TErrorSources } from "../interface/error.types"
import handleZodError from "../errors/handleZodError"
import handleValidationError from "../errors/handleValidationError"
import handleCastError from "../errors/handleCastError"
import handleDuplicateError from "../errors/handleDuplicateError"
import AppError from "../errors/AppError"
import config from "../config"
import { NextFunction, Request, Response } from "express"

const globalErrorHandler = (err: any, _req : Request, res: Response, _next: NextFunction) => {
    let statusCode = 500
    let message = 'Something went wrong!'
    let errorSources: TErrorSources = [
        {
            path: "",
            message: "something went wrong"
        }
    ]

    if(err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }else if(err?.name === 'ValidationError') {
        const simplifiedError = handleValidationError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }else if(err?.name === 'CastError') {
        const simplifiedError = handleCastError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }else if (err.code === 11000) {
        const simplifiedError = handleDuplicateError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources;
    }else if (err instanceof AppError) {
        statusCode = err.statusCode
        message = err.message
        errorSources = [
            {
                path: "",
                message: err?.message
            }
        ]
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        stack: config.NODE_ENV === 'development' ? err.stack : null
    })
}

export default globalErrorHandler
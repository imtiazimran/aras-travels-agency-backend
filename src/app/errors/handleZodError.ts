import { ZodError, ZodIssue } from "zod";
import { TGenericErrorResponse } from "../interface/error.types";

const handleZodError = (err: ZodError):TGenericErrorResponse => {
    const errorSources = err.issues.map((issue : ZodIssue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue.message
        }
    });

    const statusCode = 400;
    
    return {
        statusCode,
        message: "Validation error",
        errorSources
    }
}

export default handleZodError
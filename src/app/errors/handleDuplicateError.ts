import { TGenericErrorResponse } from "../interface/error.types";

const handleDuplicateError = (err: any): TGenericErrorResponse => {
    // Extract the field and value causing the duplicate key error
    const match = err.errmsg.match(/(["'])(\\?.)*?\1/);
    console.log("handleDuplicateError", err.errmsg);
    

    const errorSources = [
        {
            path: err.codeName,
            message: `${match[0]} is already exists`
        }
    ];

    const statusCode = 400;

    return {
        statusCode,
        message: "Duplicate value error",
        errorSources
    };
};

export default handleDuplicateError;

import { TGenericErrorResponse } from "../interface/error.types";

const handleDuplicateError = (err: any) : TGenericErrorResponse =>{
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];

    const errorSources = [
        {
            path: '',
            message: `${extractedMessage} is already exists`
        }
    ]

    const statusCode = 400;

    return {
        statusCode,
        message: "Validation error",
        errorSources
    }
}

export default handleDuplicateError
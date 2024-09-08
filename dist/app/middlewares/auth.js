"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const user_model_1 = require("../modules/users/user.model");
const jwt_decode_1 = require("jwt-decode");
const isAuth = () => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || req.body.token || req.query.token;
        if (!token) {
            throw new AppError_1.default(401, "Unauthorized Token Not Provided");
        }
        try {
            const decoded = (0, jwt_decode_1.jwtDecode)(token);
            if (!decoded || !decoded.email) {
                throw new AppError_1.default(401, "Error happened while verifying token");
            }
            const email = decoded.email;
            let user = yield user_model_1.User.findOne({ email });
            if (!user) {
                user = yield user_model_1.User.create(decoded);
            }
            req.user = user;
            next();
        }
        catch (error) {
            console.log("error", error);
            throw new AppError_1.default(401, "Unauthorized Something went wrong in auth middleware");
        }
    }));
};
exports.default = isAuth;

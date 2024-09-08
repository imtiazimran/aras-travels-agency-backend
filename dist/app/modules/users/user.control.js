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
exports.updateUser = exports.getMe = exports.getAllUsers = exports.createUser = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const user_service_1 = require("./user.service");
exports.createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, user_service_1.createUserInDB)(req.body);
    return (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "User Created Successfully",
        data: user
    });
}));
exports.getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, user_service_1.getAllUsersFromDB)();
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Users Retrieved Successfully",
        data: users
    });
}));
exports.getMe = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.user;
    const user = yield (0, user_service_1.getMeFromDB)(email);
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User Retrieved Successfully",
        data: user
    });
}));
exports.updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield (0, user_service_1.updateUserInfoInDB)({ email: (_a = req.user) === null || _a === void 0 ? void 0 : _a.email }, { data: req.body });
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User Updated Successfully",
        data: user
    });
}));

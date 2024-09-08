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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserInfoInDB = exports.getMeFromDB = exports.getAllUsersFromDB = exports.createUserInDB = void 0;
const user_model_1 = require("./user.model");
const createUserInDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.create(data);
});
exports.createUserInDB = createUserInDB;
const getAllUsersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.find();
});
exports.getAllUsersFromDB = getAllUsersFromDB;
const getMeFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findOne({ email });
});
exports.getMeFromDB = getMeFromDB;
const updateUserInfoInDB = (email, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findOneAndUpdate({ email }, data, { new: true });
});
exports.updateUserInfoInDB = updateUserInfoInDB;

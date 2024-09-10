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
exports.deleteJobByIdInDB = exports.updateJobByIdInDB = exports.getJobByIdFromDB = exports.getAllJobsFromDB = exports.createJobInDB = void 0;
const job_model_1 = require("./job.model");
const createJobInDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield job_model_1.Job.create(data);
});
exports.createJobInDB = createJobInDB;
const getAllJobsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield job_model_1.Job.find();
});
exports.getAllJobsFromDB = getAllJobsFromDB;
const getJobByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield job_model_1.Job.findById(id);
});
exports.getJobByIdFromDB = getJobByIdFromDB;
const updateJobByIdInDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield job_model_1.Job.findByIdAndUpdate(id, data, { new: true });
});
exports.updateJobByIdInDB = updateJobByIdInDB;
const deleteJobByIdInDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield job_model_1.Job.findByIdAndDelete(id);
});
exports.deleteJobByIdInDB = deleteJobByIdInDB;

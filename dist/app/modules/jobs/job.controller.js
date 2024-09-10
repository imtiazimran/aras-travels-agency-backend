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
exports.deleteJobById = exports.updateJobById = exports.getJobById = exports.getAllJobs = exports.createJob = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const job_service_1 = require("./job.service");
exports.createJob = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const job = yield (0, job_service_1.createJobInDB)(req.body);
    return (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Job Created Successfully",
        data: job
    });
}));
exports.getAllJobs = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobs = yield (0, job_service_1.getAllJobsFromDB)();
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Jobs Retrieved Successfully",
        data: jobs
    });
}));
exports.getJobById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const job = yield (0, job_service_1.getJobByIdFromDB)(id);
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Job Retrieved Successfully",
        data: job
    });
}));
exports.updateJobById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const job = yield (0, job_service_1.updateJobByIdInDB)(id, req.body);
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Job Updated Successfully",
        data: job
    });
}));
exports.deleteJobById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const job = yield (0, job_service_1.deleteJobByIdInDB)(id);
    return (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Job Deleted Successfully",
        data: null
    });
}));

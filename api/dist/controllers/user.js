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
exports.allUsers = void 0;
const relations_1 = require("../models/relations");
const Google_1 = __importDefault(require("../models/Google"));
const allUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let modelGoogle = yield Google_1.default.findAll();
        modelGoogle = JSON.parse(JSON.stringify(modelGoogle));
        let unionModel = [];
        modelGoogle.map((el) => {
            return unionModel.push({
                "id": "",
                "user": el.name,
                "email": el.email,
                "password": "",
                "plan": "",
                "dateIn": "",
                "dateOut": "",
                "contact": "",
                "occupation": "",
                // "rol": null,
            });
        });
        let modelUser = yield relations_1.User.findAll();
        modelUser = JSON.parse(JSON.stringify(modelUser));
        console.log("MODELS:", modelUser);
        // unionModel = modelUser.concat(unionModel)
        unionModel = [...modelGoogle, ...modelUser];
        return unionModel;
    }
    catch (error) {
        console.log("ERROR:", error);
    }
});
exports.allUsers = allUsers;

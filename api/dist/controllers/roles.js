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
exports.getRoleByName = void 0;
const Roles_1 = __importDefault(require("../models/Roles"));
const getRoleByName = (role) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rol = yield Roles_1.default.findOne({
            where: {
                name: role.name,
            },
        });
        if (!role)
            return false;
        return rol;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getRoleByName = getRoleByName;

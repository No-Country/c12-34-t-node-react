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
exports.validateLogin = void 0;
const gmail_1 = require("./items/gmail");
const password_1 = require("./items/password");
const relations_1 = require("../models/relations");
const validateLogin = (admin) => __awaiter(void 0, void 0, void 0, function* () {
    if (!admin.email && !admin.password) {
        throw new Error("Todos los campos son requeridos"); // OK
    }
    (0, gmail_1.validationEmail)(admin.email);
    const allUsers = yield relations_1.Admin.findAll({
        where: {
            email: admin.email
        }
    });
    if (!allUsers.length) {
        throw new Error('Esta cuenta no está registrada');
    }
    (0, password_1.validationPassword)(admin.password);
    return admin;
});
exports.validateLogin = validateLogin;

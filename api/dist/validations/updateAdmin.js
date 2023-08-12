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
exports.validateUpdateAdmin = void 0;
const Admin_1 = require("../models/Admin");
const gmail_1 = require("./items/gmail");
const name_1 = require("./items/name");
const validateUpdateAdmin = (admin) => __awaiter(void 0, void 0, void 0, function* () {
    // SE VERIFICAN TODOS LOS CAMPOS
    if (!admin.user && !admin.email) {
        throw new Error("Todos los campos son requeridos");
    }
    // SE VERIFICA QUE NO TENGA NUMEROS Y CANTIDAD DE LETRAS
    (0, name_1.validationFullName)(admin.user);
    // SE VERIFICA QUE EL CORREO SEA VALIDO
    (0, gmail_1.validationEmail)(admin.email);
    // SE BUSCA EL USUARIO
    const allAdmin = yield Admin_1.Admin.findOne({
        where: {
            user: admin.user,
            email: admin.email,
        }
    });
    // SE COMPRUEBA SI EL USUARIO YA EXISTE
    if ((allAdmin === null || allAdmin === void 0 ? void 0 : allAdmin.user) && allAdmin.email) {
        throw new Error("Los datos del usuario ya se encuentran registrados");
    }
    return admin;
});
exports.validateUpdateAdmin = validateUpdateAdmin;

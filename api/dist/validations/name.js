"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationClassName = exports.validationFullName = void 0;
const utils_1 = require("../helper/utils");
const validationFullName = (name) => {
    if (!name.match(utils_1.fullName)) {
        throw new Error("Debes colocar un nombre y apellido valido");
    }
    return name;
};
exports.validationFullName = validationFullName;
const validationClassName = (clasName) => {
    if (!clasName.match(utils_1.nameClass)) {
        throw new Error("El nombre de la clase debe ser, por ejemplo: cross-fit o danzas modernas");
    }
    return clasName;
};
exports.validationClassName = validationClassName;

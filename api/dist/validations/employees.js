"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmployees = void 0;
const gmail_1 = require("./items/gmail");
const name_1 = require("./items/name");
const regex_1 = require("../helper/regex");
const validateEmployees = (employees) => {
    if (!employees.name && !employees.email && !employees.contact && !employees.occupation) {
        throw new Error("Todos los campos son requeridos");
    }
    (0, name_1.validationFullName)(employees.name);
    (0, gmail_1.validationEmail)(employees.email);
    if (!regex_1.regexPhone.test(employees.contact)) {
        throw new Error("Número de contacto invalido");
    }
    if (employees.occupation.length < 5) {
        throw new Error("La ocupación debe tener más de 4 caracteres");
    }
    return employees;
};
exports.validateEmployees = validateEmployees;

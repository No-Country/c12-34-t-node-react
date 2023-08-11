"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationEmail = void 0;
const utils_1 = require("../helper/utils");
const validationEmail = (gmail) => {
    if (!gmail) {
        // return res.status(400).json({ message: 'Debe ingresar un correo' });
        throw new Error('Debe ingresar un correo');
    }
    if (!utils_1.emailRegex.test(gmail) || !utils_1.dominiosPermitidosRegex.test(gmail)) {
        // return res.status(400).json({ message: 'El correo electrónico no es válido' });
        throw new Error('El correo electrónico no es válido');
    }
    return gmail;
};
exports.validationEmail = validationEmail;

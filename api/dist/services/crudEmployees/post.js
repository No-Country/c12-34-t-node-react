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
exports.postEmployees = void 0;
const Employees_1 = require("../../models/Employees");
const employees_1 = require("../../validations/employees");
const postEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        const validation = (0, employees_1.validateEmployees)(usuario);
        const existUser = yield Employees_1.Employees.findOne({
            where: { email: validation.email },
        });
        if (existUser) {
            return res.status(400).json({ msg: "El empleado ya existe", existUser });
        }
        const newUser = yield Employees_1.Employees.create({
            name: validation.name,
            email: validation.email,
            contact: validation.contact,
            occupation: validation.occupation,
            adminId: usuario.adminId,
        });
        if (newUser) {
            return res.status(200).json({
                msg: "Se ha ingresado un nuevo empleado",
                newUser
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        console.log(error);
    }
});
exports.postEmployees = postEmployees;

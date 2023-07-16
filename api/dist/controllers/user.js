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
exports.upDateUser = exports.getAllUsers = exports.perfil = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = require("../helper/bcrypt");
const JWToken_1 = require("../helper/JWToken");
const relations_1 = require("../models/relations");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        if (!usuario.user || !usuario.password || !usuario.email)
            return res.status(400).json({ msg: "Todos los campos son requeridos" });
        const existUser = yield relations_1.User.findOne({
            where: { email: usuario.email },
        });
        if (existUser) {
            return res.status(400).json({ msg: "El usuario ya existe", existUser });
        }
        const encriptado = yield (0, bcrypt_1.passwordHashado)(usuario.password);
        const newUser = yield relations_1.User.create({
            user: usuario.user,
            // lastName: usuario.lastName,
            email: usuario.email,
            password: encriptado,
        });
        if (newUser) {
            return res.status(200).json({ msg: "Usuario creado", newUser });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = req.body;
    try {
        const existUser = yield relations_1.User.findOne({
            where: {
                email: usuario.email
                // rol: usuario.rol,
            }
        });
        if (!existUser) {
            return res.status(401).json({ msg: "Esta cuenta no esta registrada" });
        }
        const passwordEncriptado = yield existUser.password;
        const compararPassword = yield (0, bcrypt_1.passwordCorrecto)(usuario.password, passwordEncriptado);
        if (compararPassword) {
            const token = yield (0, JWToken_1.generarToken)(existUser.email);
            const data = {
                user: existUser,
                token,
            };
            return res.status(200).json({ msg: "Session y token valido", data });
        }
        else {
            return res.status(403).json({ msg: "Clave invalida" });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.loginUser = loginUser;
const perfil = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarioRegistado = yield relations_1.User.findOne(req.usuarioId);
        if (!usuarioRegistado)
            return res.status(404).json({ message: "No se encontro el pefil" });
        res.status(200).json({ message: "Perfil del usuario", usuarioRegistado });
    }
    catch (error) {
        console.log(error);
    }
});
exports.perfil = perfil;
const getAllUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield relations_1.User.findAll({
            include: [{
                    model: relations_1.Elements,
                    attributes: ["name"],
                    include: [{
                            model: relations_1.Provider,
                            attributes: ["name"],
                        }],
                }, {
                    model: relations_1.ClassGroup,
                    attributes: ["name"]
                }, {
                    model: relations_1.Provider,
                    attributes: ["name"],
                    include: [{
                            model: relations_1.Elements,
                            attributes: ["name"],
                        }],
                }, {
                    model: relations_1.Expense,
                    attributes: ["name"]
                }],
            attributes: ["id", "user", "email"],
        });
        if (!allUsers.length) {
            throw new Error("No hay usuarios registrados");
        }
        else {
            return res.status(200).json(allUsers);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
    }
});
exports.getAllUsers = getAllUsers;
const upDateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.body;
    try {
        if (id.length < 36) {
            throw new Error("El usuario no existe");
        }
        else {
            yield relations_1.User.update(user, {
                where: { id, },
            });
            return res.status(200).json({ change: "Actualización del usuario completa", user, });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en upDateUser por:" + error });
    }
});
exports.upDateUser = upDateUser;

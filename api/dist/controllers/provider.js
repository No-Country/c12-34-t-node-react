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
exports.deleteProvider = exports.putProvider = exports.postProvider = exports.getProvider = void 0;
const Providers_1 = __importDefault(require("../models/Providers"));
const relations_1 = require("../models/relations");
const getProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proveedores = yield Providers_1.default.findAll({
            include: {
                model: relations_1.User,
                attributes: ["user"],
                include: [{
                        model: relations_1.Elements,
                        attributes: ["name"],
                    }],
            }
        });
        return res.status(200).json({ msg: "Todos los proveedores", proveedores });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProvider = getProvider;
const postProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proveedor = req.body;
    try {
        if (!proveedor.name ||
            !proveedor.product ||
            !proveedor.contact ||
            !proveedor.description ||
            !proveedor.email ||
            !proveedor.provider ||
            !proveedor.date)
            return res.status(400).json({ msg: "Todos los campos son requeridos" });
        const existProveedor = yield Providers_1.default.findOne({
            where: { email: proveedor.email }
        });
        if (existProveedor) {
            return res.status(400).json({ msg: "El proveedor ya existe" });
        }
        const newProveedor = yield Providers_1.default.create(req.body);
        if (newProveedor) {
            return res.status(200).json({ msg: "Se registro el proveedor con exito", newProveedor });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.postProvider = postProvider;
const putProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = req.body;
    const { id } = req.params;
    try {
        const proveedor = yield Providers_1.default.update(provider, { where: { id } });
        return res.status(200).json({ msg: "Proveedor actualizado", proveedor });
    }
    catch (error) {
        console.log(error);
    }
});
exports.putProvider = putProvider;
const deleteProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const proveedor = yield Providers_1.default.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({ msg: "El Proveedor esta eliminado", proveedor });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProvider = deleteProvider;

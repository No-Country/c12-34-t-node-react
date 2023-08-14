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
exports.checkRoleMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const relations_1 = require("../models/relations");
const { TOKEN } = process.env;
const checkRoleMiddleware = (role) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.rawHeaders) {
            try {
                // const token = req.headers.authorization.split(' ')[1]; // ?
                const token = req.rawHeaders[1].split(' ')[1];
                if (!token) {
                    return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
                }
                const decodedToken = jsonwebtoken_1.default.verify(token, TOKEN);
                // console.log("DECODED TOKEN:", decodedToken)
                // console.log("DECODED TOKEN:", decodedToken.id)
                console.log("ROLE:", role);
                const admin = yield relations_1.Admin.findOne({
                    where: {
                        email: decodedToken.id // CORREO DEL ADMIN
                    }
                });
                console.log("ROLE - 2:", admin === null || admin === void 0 ? void 0 : admin.role);
                if ((admin === null || admin === void 0 ? void 0 : admin.role) !== role) {
                    return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
                }
                // const userRole = decodedToken.role;
                // if (role.includes(userRole)) {
                //   return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
                // }
                next();
            }
            catch (error) {
                return res.status(401).json({ message: 'Token inválido o expirado.' });
            }
        }
    });
};
exports.checkRoleMiddleware = checkRoleMiddleware;

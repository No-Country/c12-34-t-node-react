"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRoleMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkRoleMiddleware = (role) => {
    return (req, res, next) => {
        var _a;
        try {
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
            }
            const decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN || "CL@VE");
            const userRole = decodedToken.role;
            if (role.includes(userRole)) {
                return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
            }
            next();
        }
        catch (error) {
            return res.status(401).json({ message: 'Token inválido o expirado.' });
        }
    };
};
exports.checkRoleMiddleware = checkRoleMiddleware;

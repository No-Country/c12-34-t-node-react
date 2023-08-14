"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = require("express");
const register_1 = require("../services/crudAdmin/register");
const login_1 = require("../services/crudAdmin/login");
const get_1 = require("../services/crudAdmin/get");
const put_1 = require("../services/crudAdmin/put");
const delete_1 = require("../services/crudAdmin/delete");
require("dotenv/config");
const passport_1 = __importDefault(require("passport"));
require("../helper/auth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const IAdmin_1 = require("../interfaces/IAdmin");
const checkRoles_1 = require("../helper/checkRoles");
const authToken_1 = require("../middlewares/authToken");
exports.adminRoutes = (0, express_1.Router)();
// ─── Usuario ─────────────────────────────────────────────────────────────────
exports.adminRoutes.post("/api/auth", register_1.registerUser);
exports.adminRoutes.post("/api/login", login_1.loginUser);
exports.adminRoutes.get("/api/all-users", authToken_1.authToken, (0, checkRoles_1.checkRoleMiddleware)(IAdmin_1.TypeRole.Admin), get_1.getAllUsers);
// adminRoutes.get("/api/all-users", getAllUsers)
exports.adminRoutes.put("/api/update-user/:id", put_1.upDateUser);
exports.adminRoutes.delete("/api/delete-admin/:id", delete_1.deleteAdmin);
// ─── Google ─────────────────────────────────────────────────────────────────
exports.adminRoutes.get("/google", passport_1.default.authenticate("google", {
    scope: ["email", "profile"]
}));
exports.adminRoutes.get("/auth/google/callback", passport_1.default.authenticate("google", {
    session: false
}), (req, res) => {
    const { URL_FRONT } = process.env;
    const { id, googleId } = req.user;
    console.log("ID-UUID:", id, "/ GOOGLE-ID:", googleId);
    jsonwebtoken_1.default.sign({ user: req.user }, "secretKey", { expiresIn: "5h" }, (err, token) => {
        if (err) {
            return res.json({
                token: null,
            });
            return res.json({ error: err });
        }
        // res.cookie("tokenCookie", token, {
        //   httpOnly: true,
        //   sameSite: "none",
        //   path: "/login",
        //   domain: "http://127.0.0.1:5173",
        //   secure: false
        // })
        // return res.json({
        //   user: req.user,
        //   token,
        // });
        // res.setCookie("userCookie", req.user)
        // res.setHeader('Set-Cookie', `token=${token}`)
        // res.setHeader('Set-Cookie', `user=${req.user}`)
        // return res.redirect(`${URL_FRONT}/login?token=${token}&user=${req.user}`)
        return res.redirect(`${URL_FRONT}/admin/${id}?token=${token}&user=${req.user}`);
        // return res.redirect(`${URL_FRONT}/admin/${googleId}?token=${token}&user=${req.user}`)
    });
});

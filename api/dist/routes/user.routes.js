"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const register_1 = require("../services/crudUser/register");
const login_1 = require("../services/crudUser/login");
const get_1 = require("../services/crudUser/get");
const put_1 = require("../services/crudUser/put");
require("dotenv/config");
const passport_1 = __importDefault(require("passport"));
require("../helper/auth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userRoutes = (0, express_1.Router)();
// ─── Usuario ─────────────────────────────────────────────────────────────────
exports.userRoutes.post("/api/auth", register_1.registerUser);
exports.userRoutes.post("/api/login", login_1.loginUser);
exports.userRoutes.get("/api/all-users", get_1.getAllUsers);
exports.userRoutes.put("/api/update-user/:id", put_1.upDateUser);
// ─── Google ─────────────────────────────────────────────────────────────────
exports.userRoutes.get("/google", passport_1.default.authenticate("google", {
    scope: ["email", "profile"]
}));
exports.userRoutes.get("/auth/google/callback", passport_1.default.authenticate("google", {
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

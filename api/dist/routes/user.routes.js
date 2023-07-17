"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
const passport_1 = __importDefault(require("passport"));
require("../helper/auth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.userRoutes = (0, express_1.Router)();
// ─── Usuario ─────────────────────────────────────────────────────────────────
exports.userRoutes.post("/api/auth", user_1.registerUser);
exports.userRoutes.post("/api/login", user_1.loginUser);
exports.userRoutes.get("/api/all-users", user_1.getAllUsers);
exports.userRoutes.put("/api/update-user/:id", user_1.upDateUser);
// ─── Google ─────────────────────────────────────────────────────────────────
exports.userRoutes.get("/google", passport_1.default.authenticate("google", { scope: ["email", "profile"] }));
exports.userRoutes.get("/auth/google/callback", passport_1.default.authenticate("google", { session: false }), (req, res) => {
    jsonwebtoken_1.default.sign({ user: req.user }, "secretKey", { expiresIn: "5h" }, (err, token) => {
        if (err) {
            return res.json({
                token: null,
            });
        }
        return res.json({
            user: req.user,
            token,
        });
    });
});

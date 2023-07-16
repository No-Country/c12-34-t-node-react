"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerRoutes = void 0;
const express_1 = require("express");
const authToken_1 = require("../middlewares/authToken");
const provider_1 = require("../controllers/provider");
exports.providerRoutes = (0, express_1.Router)();
// ─── Proveedor ───────────────────────────────────────────────────────────────
exports.providerRoutes.get("/api/providers", authToken_1.authToken, provider_1.getProvider);
exports.providerRoutes.post("/api/provider", authToken_1.authToken, provider_1.postProvider);
exports.providerRoutes.put("/api/provider/:id", authToken_1.authToken, provider_1.putProvider);
exports.providerRoutes.delete("/api/provider/:id", authToken_1.authToken, provider_1.deleteProvider);

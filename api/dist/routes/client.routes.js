"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRoutes = void 0;
require("dotenv/config");
const express_1 = require("express");
const postClient_1 = require("../services/crudClients/postClient");
const getClient_1 = require("../services/crudClients/getClient");
const putClient_1 = require("../services/crudClients/putClient");
const deleteClient_1 = require("../services/crudClients/deleteClient");
exports.clientRoutes = (0, express_1.Router)();
// ─── Usuario ─────────────────────────────────────────────────────────────────
exports.clientRoutes.get("/api/clients", getClient_1.getClients);
exports.clientRoutes.post("/api/client", postClient_1.createClient);
exports.clientRoutes.put("/api/client/:id", putClient_1.updateClient);
exports.clientRoutes.delete("/api/client/:id", deleteClient_1.deleteClient);

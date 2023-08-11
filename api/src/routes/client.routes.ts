import "dotenv/config";
import { Router } from "express"
import { createClient } from "../services/crudClients/postClient"
import { getClients } from "../services/crudClients/getClient"
import { updateClient } from "../services/crudClients/putClient";
import { deleteClient } from "../services/crudClients/deleteClient";
import { authToken } from "../middlewares/authToken";
import { checkRoleMiddleware } from "../helper/checkRoles";
import { Rol } from "../interfaces/IClient";


export const clientRoutes = Router()

// ─── Usuario ─────────────────────────────────────────────────────────────────

clientRoutes.get("/api/clients", authToken, checkRoleMiddleware(Rol.Client), getClients)

clientRoutes.post("/api/client", authToken, createClient)

clientRoutes.put("/api/client/:id", authToken, updateClient)

clientRoutes.delete("/api/client/:id", authToken, deleteClient)

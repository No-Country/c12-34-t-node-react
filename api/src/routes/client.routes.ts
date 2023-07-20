import "dotenv/config";
import { Router } from "express"
import { createClient } from "../services/crudClients/postClient"
import { getClients } from "../services/crudClients/getClient"
import { updateClient } from "../services/crudClients/putClient";
import { deleteClient } from "../services/crudClients/deleteClient";


export const clientRoutes = Router()

// ─── Usuario ─────────────────────────────────────────────────────────────────

clientRoutes.get("/api/clients", getClients)

clientRoutes.post("/api/client", createClient)

clientRoutes.put("/api/client/:id", updateClient)

clientRoutes.delete("/api/client/:id", deleteClient)

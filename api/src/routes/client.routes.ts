import { Router } from "express"
import "dotenv/config";
import { clientUser } from "../services/postClient"
import { clientUsers } from "../services/getClient"

export const clientRoutes = Router()

// ─── Clientes ─────────────────────────────────────────────────────────────────

clientRoutes.post("/api/client", clientUser)

// clientRoutes.delete("/api/login", loginUser)

clientRoutes.get("/api/clients", clientUsers)

// clientRoutes.put("/api/update-user/:id", upDateUser)

import { Router } from "express"
import { authToken } from "../middlewares/authToken"
import { deleteProvider, getProvider, postProvider, putProvider } from "../controllers/provider"

export const providerRoutes = Router()

// ─── Proveedor ───────────────────────────────────────────────────────────────

providerRoutes.get("/api/providers", authToken, getProvider)

providerRoutes.post("/api/provider", authToken, postProvider)

providerRoutes.put("/api/provider/:id", authToken, putProvider)

providerRoutes.delete("/api/provider/:id", authToken, deleteProvider)

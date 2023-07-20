import { Router } from "express"
// import { registerUser } from "../services/crudUser/register"
// import { loginUser } from "../services/crudUser/login"
// import { getAllUsers } from "../services/crudUser/get"
// import { upDateUser } from "../services/crudUser/put"
import "dotenv/config";
import { clientUser } from "../services/postClient"
import { clientUsers } from "../services/getClient"


export const clientRoutes = Router()

// ─── Usuario ─────────────────────────────────────────────────────────────────

clientRoutes.post("/api/client", clientUser)

// clientRoutes.post("/api/login", loginUser)

clientRoutes.get("/api/clients", clientUsers)

// userRoutes.put("/api/update-user/:id", upDateUser)


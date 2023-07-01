import { Router } from "express"
import { registerUser } from "../controllers/user"


const router = Router()

router.post("/api/auth", registerUser)

export default router
import { Router } from "express"
import {
  registerUser,
  loginUser
} from "../controllers/user"


const router = Router()

router.post("/api/auth", registerUser)

router.get("api/login", loginUser)


export default router
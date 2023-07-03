import { Router } from "express"
import {
  registerUser,
  loginUser
} from "../controllers/user"
import { getElementsGym } from "../services/getElements"


const router = Router()

router.post("/api/auth", registerUser)

router.post("/api/login", loginUser)

router.get("/api/elements", getElementsGym);


export default router
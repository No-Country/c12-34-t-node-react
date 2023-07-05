import { Router } from "express"
import {
  registerUser,
  loginUser
} from "../controllers/user"
import { deleteElementsGym, getElementsGym, postElementsGym, putElemetsGym } from "../services/getElements"

const allRoutes = Router()

allRoutes.post("/api/auth", registerUser)

allRoutes.post("/api/login", loginUser)

allRoutes.get("/api/elements", getElementsGym);
allRoutes.post("/api/elements", postElementsGym);
allRoutes.put("/api/elements/:id", putElemetsGym);
allRoutes.delete("/api/elements/:id", deleteElementsGym);

export default allRoutes;
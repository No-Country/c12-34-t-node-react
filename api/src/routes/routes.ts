import { Router } from "express"
import {
  registerUser,
  loginUser,
  getAllUsers,
} from "../controllers/user"
import { authToken } from "../middlewares/authToken"
import { getElementsGym } from "../services/crudElements/get"
import { postElementsGym } from "../services/crudElements/post"
import { putElemetsGym } from "../services/crudElements/put"
import { deleteElementsGym } from "../services/crudElements/delete"

const allRoutes = Router()

allRoutes.post("/api/auth", registerUser)

allRoutes.post("/api/login", loginUser)
allRoutes.get("/api/all-users", getAllUsers)


allRoutes.get("/api/elements", authToken, getElementsGym);

allRoutes.post("/api/elements", postElementsGym);
allRoutes.put("/api/elements/:id", putElemetsGym);
allRoutes.delete("/api/elements/:id", deleteElementsGym);

export default allRoutes;
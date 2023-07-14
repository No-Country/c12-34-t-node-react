import { Router } from "express"
import {
  registerUser,
  loginUser,
  getAllUsers,
  upDateUser,
} from "../controllers/user"

import { authToken } from "../middlewares/authToken"
import { getElementsGym } from "../services/crudElements/get"
import { postElementsGym } from "../services/crudElements/post"
import { putElemetsGym } from "../services/crudElements/put"
import { deleteElementsGym } from "../services/crudElements/delete"

import {
  getProvider,
  deleteProvider,
  postProvider,
  putProvider
} from "../controllers/provider"

import { postClassGym } from "../services/crudClass/post"
import { getClassGroupGym } from "../services/crudClass/get"
import { deleteClassGroupGym } from "../services/crudClass/delete"
import { putClassGroupGym } from "../services/crudClass/put"

import { postExpenseGym } from "../services/crudExpense/post"
import { getExpensesGym } from "../services/crudExpense/get"
import { deleteExpensesGym } from "../services/crudExpense/delete"
import { putExpensesGym } from "../services/crudExpense/put"

const allRoutes = Router()


// ─── Usuario ─────────────────────────────────────────────────────────────────

allRoutes.post("/api/auth", registerUser)

allRoutes.post("/api/login", loginUser)

allRoutes.get("/api/all-users", getAllUsers)

allRoutes.put("/api/update-user/:id", upDateUser)


// ─── Productos ───────────────────────────────────────────────────────────────

allRoutes.get("/api/elements", authToken, getElementsGym);

allRoutes.post("/api/elements", authToken, postElementsGym);

allRoutes.put("/api/elements/:id", putElemetsGym);

allRoutes.delete("/api/elements/:id", deleteElementsGym);


// ─── Proveedor ───────────────────────────────────────────────────────────────

allRoutes.get("/api/providers", getProvider)

allRoutes.post("/api/provider", postProvider)

allRoutes.put("/api/provider/:id", putProvider)

allRoutes.delete("/api/provider/:id", deleteProvider)

// ─── Clases Grupales ───────────────────────────────────────────────────────────────

allRoutes.get("/api/class-group", getClassGroupGym)

allRoutes.post("/api/class-group", postClassGym)

allRoutes.delete("/api/class-group/:id", deleteClassGroupGym)

allRoutes.put("/api/class-group/:id", putClassGroupGym)

// ─── Gastos Mensuales ───────────────────────────────────────────────────────────────

allRoutes.get("/api/expenses", getExpensesGym)

allRoutes.post("/api/expense", postExpenseGym)

allRoutes.delete("/api/expense/:id", deleteExpensesGym)

allRoutes.put("/api/expense/:id", putExpensesGym)

export default allRoutes;

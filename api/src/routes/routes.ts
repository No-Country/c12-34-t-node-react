import { Request, Response, Router } from "express"
import {
  registerUser,
  loginUser,
  getAllUsers,
  upDateUser,
} from "../controllers/user"

import { authToken } from "../middlewares/authToken"
import { getElementsGym } from "../services/crudElements/get"
import { postRelationElements } from "../services/crudElements/post"
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


import passport from "passport"

import "../helper/auth"

const allRoutes = Router()


// ─── Usuario ─────────────────────────────────────────────────────────────────

allRoutes.post("/api/auth", registerUser)

allRoutes.post("/api/login", loginUser)

allRoutes.get("/api/all-users", getAllUsers)

allRoutes.put("/api/update-user/:id", upDateUser)


allRoutes.get("/google", passport.authenticate("google", { scope: "profile" }))

allRoutes.get("/auth/google/callback", passport.authenticate('google', {
  // successRedirect: '/auth/google/success',
  failureRedirect: '/login'
}), (req: Request, res: Response) => {
  res.json({ msg: "Usuario logeado" })
});


// ─── Productos ───────────────────────────────────────────────────────────────

allRoutes.get("/api/elements", authToken, getElementsGym);

// RELACION ELEMENTO VS PROVEEDOR VS ADMIN
allRoutes.post("/api/element-client", authToken, postRelationElements);

allRoutes.put("/api/elements/:id", authToken, putElemetsGym);

allRoutes.delete("/api/elements/:id", authToken, deleteElementsGym);


// ─── Proveedor ───────────────────────────────────────────────────────────────

allRoutes.get("/api/providers", authToken, getProvider)

allRoutes.post("/api/provider", authToken, postProvider)

allRoutes.put("/api/provider/:id", authToken, putProvider)

allRoutes.delete("/api/provider/:id", authToken, deleteProvider)

// ─── Clases Grupales ───────────────────────────────────────────────────────────────

allRoutes.get("/api/class-group", authToken, getClassGroupGym)

allRoutes.post("/api/class-group", authToken, postClassGym)

allRoutes.delete("/api/class-group/:id", authToken, deleteClassGroupGym)

allRoutes.put("/api/class-group/:id", authToken, putClassGroupGym)

// ─── Gastos Mensuales ───────────────────────────────────────────────────────────────

allRoutes.get("/api/expenses", authToken, getExpensesGym)

allRoutes.post("/api/expense", authToken, postExpenseGym)

allRoutes.delete("/api/expense/:id", authToken, deleteExpensesGym)

allRoutes.put("/api/expense/:id", authToken, putExpensesGym)

export default allRoutes;

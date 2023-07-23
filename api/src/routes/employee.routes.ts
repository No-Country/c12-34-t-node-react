import { Router } from "express"
import { deleteEmployesGym } from "../services/crudEmployees/delete";
import { upDateEmployees } from "../services/crudEmployees/put";
import { getAllEmployees } from "../services/crudEmployees/get";
import { postEmployees } from "../services/crudEmployees/post";

export const employeeRoutes = Router()

// ─── Clientes ─────────────────────────────────────────────────────────────────

employeeRoutes.get("/api/employees", getAllEmployees)

employeeRoutes.post("/api/employee", postEmployees)

employeeRoutes.put("/api/employee/:id", upDateEmployees)

employeeRoutes.delete("/api/employee/:id", deleteEmployesGym)

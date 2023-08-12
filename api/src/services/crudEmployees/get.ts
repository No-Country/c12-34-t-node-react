import { Request, Response } from "express";
import { Employees } from "../../models/relations";
import { Admin } from "../../models/relations";

export const getAllEmployees = async (_: Request, res: Response) => {
  try {
    const allEmployees = await Employees.findAll({
      include: {
        model: Admin,
        attributes: ["user"],
      }
    });

    if (!allEmployees.length) {
      throw new Error("No hay empleados registrados");
    } else {
      return res.status(200).json(allEmployees);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getAllEmployees por:" + error, });
  }
}
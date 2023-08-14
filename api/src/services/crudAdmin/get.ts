import { Request, Response } from "express";
import { ClassGroup, Elements, Expense, Provider, Admin, Employees } from "../../models/relations";
import { TypeRole } from "../../interfaces/IAdmin";

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allAdmin = await Admin.findAll({
      where: {
        role: TypeRole.Admin
      },
      include: [{
        model: Elements,
        attributes: ["name"],
        include: [{
          model: Provider,
          attributes: ["name"],
        }],
      }, {
        model: Employees,
        attributes: ["name"]
      }, {
        model: ClassGroup,
        attributes: ["name"]
      }, {
        model: Provider,
        attributes: ["name"],
        include: [{
          model: Elements,
          attributes: ["name"],
        }],
      }, {
        model: Expense,
        attributes: ["name"]
      }],
      attributes: ["id", "user", "email"],
    });

    if (!allAdmin.length) {
      throw new Error("No hay usuarios registrados");
    } else {
      return res.status(200).json(allAdmin);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}
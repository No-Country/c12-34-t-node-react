import { Request, Response } from "express";
import { IEmployees } from "../../interfaces/IEmployees";
import {Employees} from "../../models/Employees";
import { validateEmployees } from "../../validations/employees";

export const postEmployees = async (req: Request, res: Response) => {
  const usuario = req.body as IEmployees;

  try {
    const validation = validateEmployees(usuario);

    const existUser = await Employees.findOne({
      where: { email: validation.email },
    });

    if (existUser) {
      return res.status(400).json({ msg: "El empleado ya existe", existUser });
    }

    const newUser = await Employees.create({
      name: validation.name,
      email: validation.email,
      contact: validation.contact,
      occupation: validation.occupation,
      adminId: usuario.adminId,
    });

    if (newUser) {
      return res.status(200).json({
        msg: "Se ha ingresado un nuevo empleado",
        newUser
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    console.log(error);
  }
};

import { Request, Response } from "express";
import {Employees} from "../../models/Employees";

export const deleteEmployesGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    
    if (id.length < 36) {
      throw Error(`El empleado no existe`);
    } else {
      await Employees.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El empleado ha sido eliminado", });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteEmployesGym por:" + error });
  }
}
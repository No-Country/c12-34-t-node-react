import { Request, Response } from "express";
import { IAdmin } from "../../interfaces/IAdmin";
import { Admin } from "../../models/relations";
import { validateUpdateAdmin } from "../../validations/updateAdmin";

export const upDateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: IAdmin = req.body;

  try {
    const current = await validateUpdateAdmin(user);
    
    if (id.length < 36) {
      throw new Error("El usuario no existe");
    } else {
      await Admin.update(current, {
        where: { id, },
      });

      return res.status(200).json({ change: "Actualización del usuario completa", current, });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en upDateUser por:" + error });
  }
}
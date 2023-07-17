import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { User } from "../../models/relations";

export const upDateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: IUser = req.body;

  try {
    if (id.length < 36) {
      throw new Error("El usuario no existe");
    } else {
      await User.update(user, {
        where: { id, },
      });

      return res.status(200).json({ change: "Actualización del usuario completa", user, });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en upDateUser por:" + error });
  }
}
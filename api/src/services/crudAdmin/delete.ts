import { Request, Response } from "express";
import { Admin } from "../../models/relations";

export const deleteAdmin = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
     const eliminar = await Admin.findByPk(id)
    if (!eliminar) {
      throw Error(`El administrador no existe`);
    } else {
      await Admin.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({
        message: "El administrador ha sido eliminado", 
        eliminar
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteAdmin por:" + error });
  }
}
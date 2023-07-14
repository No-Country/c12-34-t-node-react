import { Request, Response } from "express";
import {Elements} from "../../models/relations";

export const deleteClassGroupGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    
    if (id.length < 36) {
      throw Error(`La clase grupal no existe`);
    } else {
      await Elements.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "La clase grupal ha sido eliminada", });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteClassGroupGym por:" + error });
  }
}
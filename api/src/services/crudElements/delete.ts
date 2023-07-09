import { Request, Response } from "express";
import Elements from "../../models/Element";

export const deleteElementsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    
    if (id.length < 36) {
      throw Error(`El elemento no existe`);
    } else {
      await Elements.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El elemento ha sido eliminado", });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteElementsGym por:" + error });
  }
}
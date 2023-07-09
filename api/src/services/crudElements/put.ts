import { Request, Response } from "express";
import { IElements } from "../../interfaces/IElements";
import Elements from "../../models/Element";

export const putElemetsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  const current = req.body as IElements;

  try {
    if (id.length < 36) {
      throw Error(`El elemento no existe`);
    } else {
      await Elements.update(current, {
        where: {
          id,
        }
      });
    
      return res.status(200).json({ change: "Los datos del elemento se actualizaron", current });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en putElemetsGym por:" + error });
  }
}
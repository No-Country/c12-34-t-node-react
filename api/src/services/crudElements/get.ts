import { getElements } from "../../controllers/getElements";
import { Request, Response } from "express";

export const getElementsGym = async (_: Request, res: Response) => {
  try {
    const infoElements = await getElements();
    if (infoElements.length) {
      return res.status(200).json(infoElements);
    }
  } catch (error) {
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });    
  }
}
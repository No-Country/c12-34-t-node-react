import Elements from "../../models/Element";
import { Request, Response } from "express";
import User from "../../models/User";

export const getElementsGym = async (_: Request, res: Response) => {
  try {
    const infoElements = await Elements.findAll({
      include: {
        model: User,
        attributes: ["user"],
      },
    });
    if (!infoElements.length) {
      return res.status(400).json({ msg: "No hay nada" });
    }
    return res.status(200).json(infoElements);
  } catch (error) {
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });    
  }
}
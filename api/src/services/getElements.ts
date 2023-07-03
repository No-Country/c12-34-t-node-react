import { getElements } from "../controllers/getElemets";
import { Request, Response } from "express";

export const getElementsGym = async (req: Request, res: Response) => {
  const infoElements = await getElements();

  return res.json(infoElements);
}
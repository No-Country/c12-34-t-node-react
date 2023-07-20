import { Request, Response } from "express";
import Client from "../models/Clientes";

export const clientUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await Client.findAll();

    if (!allUsers.length) {
      throw new Error("No hay Clientes registrados");
    } else {
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}
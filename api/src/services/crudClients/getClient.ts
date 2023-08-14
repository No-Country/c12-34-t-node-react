import { Request, Response } from "express";
// import { ClassGroup, Elements, Expense, Provider, User } from "../../models/relations";
import Client from "../../models/Clientes";
import { TypeRole } from "../../interfaces/IAdmin";

export const getClients = async (_: Request, res: Response) => {
  try {
    const allClient = await Client.findAll({
      where: {
        role: TypeRole.Client
      }
    });

    if (!allClient.length) {
      throw new Error("No hay Clientes registrados");
    } else {
      return res.status(200).json(allClient);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}
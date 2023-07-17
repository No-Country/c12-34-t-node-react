import { Request, Response } from "express"
import { Elements, Provider, User, } from "../../models/relations"

export const getProvider = async (_req: Request, res: Response) => {
  try {
    const proveedores = await Provider.findAll({
      include: {
        model: User,
        attributes: ["user"],
        include: [{
          model: Elements,
          attributes: ["name"],
        }],
      }
    })
    if (!proveedores.length) {
      return res.status(400).json({ msg: "No hay proveedores disponibles" });
    } else {
      return res.status(200).json({ msg: "Todos los proveedores", proveedores })
    }
  } catch (error) {
    console.log(error)
  }
}
import { Request, Response } from "express"
import { Elements, Provider, User, } from "../../models/relations"

<<<<<<< HEAD
export const getProvider = async (_req: Request, res: Response) => {
  console.log("Me llego algo")
=======
export const getProvider = async (req: Request, res: Response) => {
>>>>>>> 81b58aa5e09cbd3d2f6217df143490902d7be629
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
    if (!proveedores) {
      return res.status(400).json({ msg: "No hay proveedores disponibles" });
    } else {
      return res.status(200).json(proveedores)
    }
  } catch (error) {
    console.log(error)
  }
}
import { Request, Response } from "express"
import Clientes from "../../models/Clientes"

export const deleteClient = async (req: Request, res: Response) => {

  const { id } = req.params

  try {
    const cliente = await Clientes.destroy({
      where: {
        id: id
      }
    })
    return res.status(200).json({ msg: "El Cliente esta eliminado", cliente })

  } catch (error) {
    console.log(error)
  }
}
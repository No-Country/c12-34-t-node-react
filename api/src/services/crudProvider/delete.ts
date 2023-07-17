import { Request, Response } from "express"
import { Provider } from "../../models/relations"

export const deleteProvider = async (req: Request, res: Response) => {

  const { id } = req.params

  try {
    const proveedor = await Provider.destroy({
      where: {
        id: id
      }
    })
    return res.status(200).json({ msg: "El Proveedor esta eliminado", proveedor })

  } catch (error) {
    console.log(error)
  }
}
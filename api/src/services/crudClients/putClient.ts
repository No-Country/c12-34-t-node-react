import { Request, Response } from "express"
import { IProvider } from "../../interfaces/IProviders"
import Clientes from "../../models/Clientes"
import { IClient } from "../../interfaces/IClient"

export const updateClient = async (req: Request, res: Response) => {

  const client = req.body as IClient
  const { id } = req.params

  try {
    const cliente = await Clientes.update(client, { where: { id } })
    return res.status(200).json({ msg: "Cliente actualizado", cliente })

  } catch (error) {
    console.log(error)
  }
}
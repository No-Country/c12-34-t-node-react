import { Request, Response } from "express"
import Provider from "../models/Providers"
import { IProvider } from "interfaces/IProviders"



export const getProvider = async (req: Request, res: Response) => {


  try {
    const proveedores = await Provider.findAll()

    return res.status(200).json({ msg: "Todos los proveedores", proveedores })

  } catch (error) {
    console.log(error)
  }

}

export const postProvider = async (req: Request, res: Response) => {

  const proveedor = req.body as IProvider


  try {

    if (
      !proveedor.name ||
      !proveedor.product ||
      !proveedor.contact ||
      !proveedor.description ||
      !proveedor.email ||
      !proveedor.provider ||
      !proveedor.date
    )

      return res.status(400).json({ msg: "Todos los campos son requeridos" })

    const existProveedor = await Provider.findOne(
      {
        where: { email: proveedor.email }
      }
    )

    if (existProveedor) {
      return res.status(400).json({ msg: "El proveedor ya existe" })
    }

    const newProveedor = await Provider.create(req.body)

    res.send(newProveedor)

  } catch (error) {
    console.log(error)
  }

}

export const putProvider = async (req: Request, res: Response) => {

  const provider = req.body as IProvider
  const { id } = req.params


  try {
    const proveedor = await Provider.update(provider, { where: { id } })
    return res.status(200).json({ msg: "Proveedor actualizado", proveedor })

  } catch (error) {
    console.log(error)
  }
}

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


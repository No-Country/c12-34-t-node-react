import User from '../models/User'
import { Request, Response } from "express"
import { IUser } from '../interfaces/IUser';



export const registerUser = async (req: Request, res: Response) => {

  const { name, lastName, password, email } = req.body as IUser

  try {

    if (!name || !lastName || !password || !email) {

      return res.status(400).json({ msg: "Todos los campos son requeridos" })
    }

    const existUser = await User.findOne(
      {
        where: { email }
      })

    if (existUser) {
      return res.status(400).json({ message: "El usuario ya existe", existUser })
    }

    const newUser = await User.create(req.body)
    if (newUser) {
      return res.status(200).json({ msg: "Usuario creado", newUser })
    }



  } catch (error) {
    console.log(error)

  }
} 
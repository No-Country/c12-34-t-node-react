import User from '../models/User'
import { Request, Response } from "express"
import { IUser } from '../interfaces/IUser';



export const registerUser = async (req: Request, res: Response) => {

  const usuario = req.body as IUser

  try {

    if (!usuario.name || !usuario.lastName || !usuario.password || !usuario.email) {

      return res.status(400).json({ msg: "Todos los campos son requeridos" })
    }

    const existUser = await User.findOne(
      {
        where: { email: usuario.email },
      })

    if (existUser) {
      return res.status(400).json({ message: "El usuario ya existe", existUser })
    }

    const newUser = await User.create({
      name: usuario.name,
      lastName: usuario.lastName,
      password: usuario.password,
      email: usuario.email
    })


    if (newUser) {
      return res.status(200).json({ msg: "Usuario creado", newUser })
    }



  } catch (error) {
    console.log(error)

  }
} 
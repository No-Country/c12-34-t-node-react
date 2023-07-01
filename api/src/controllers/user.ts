import { User } from '../models/User'
import { Request, Response } from "express"



export const registerUser = async (req: Request, res: Response) => {

  const { name, lastName, password, email } = req.body;

  try {

    if (!name || !lastName || !password || !email) {

      res.status(400).json({ msg: "Todos los campos son requeridos" })
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
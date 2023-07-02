import User from '../models/User'
import { Request, Response } from "express"
import { IUser } from '../interfaces/IUser';
import { passwordHashado, passwordCorrecto } from '../helper/bcrypt';
import { where } from 'sequelize';






export const registerUser = async (req: Request, res: Response) => {


  const usuario = req.body as IUser

  try {

    if (!usuario.name || !usuario.lastName || !usuario.password || !usuario.email)

      return res.status(400).json({ msg: "Todos los campos son requeridos" })

    const existUser = await User.findOne(
      {
        where: { email: usuario.email },
      })

    if (existUser) {
      return res.status(400).json({ msg: "El usuario ya existe", existUser })
    }

    const encriptado = await passwordHashado(usuario.password)

    const newUser = await User.create({
      name: usuario.name,
      lastName: usuario.lastName,
      email: usuario.email,
      password: encriptado
    })


    if (newUser) {
      return res.status(200).json({ msg: "Usuario creado", newUser })
    }

  } catch (error) {
    console.log(error)

  }
}


export const loginUser = async (req: Request, res: Response) => {

  const usuario = req.body as IUser

  try {
    const existUser = await User.findOne(
      {
        where: { email: usuario.email }
      }
    )

    if (!existUser) {
      return res.status(401).json({ msg: "Esta cuenta no esta registrada" })
    }

    const passwordEncriptado = await existUser.password

    const compararPassword = await passwordCorrecto(usuario.password, passwordEncriptado)

    if (compararPassword) {

      return res.status(200).json({ msg: "clave correcta", compararPassword })

    } else {

      return res.status(403).json({ msg: "Clave invalida" })
    }

  } catch (error) {
    console.log(error)
  }
}

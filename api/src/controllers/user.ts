import User from '../models/User'
import { Request, Response } from "express"
import { IUser } from '../interfaces/IUser';
import { passwordHashado, passwordCorrecto } from '../helper/bcrypt';
import { generarToken } from "../helper/JWToken"






export const registerUser = async (req: Request, res: Response) => {


  const usuario = req.body as IUser
  console.log(req.body)

  try {

    if (!usuario.name || !usuario.password || !usuario.email)

      return res.status(400).json({ msg: "Todos los campos son requeridos" })

    const existUser = await User.findOne(
      {
        where: { email: usuario.email },
      })

    if (existUser) {
      console.log(req.body)
      return res.status(400).json({ msg: "El usuario ya existe", existUser })
     
    }

    const encriptado = await passwordHashado(usuario.password)

    const newUser = await User.create({
      name: usuario.name,
      // lastName: usuario.lastName,
      email: usuario.email,
      password: encriptado,
      elementsUser: usuario.elementsUser,
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
  console.log(req.body)


  try {
    const existUser = await User.findOne(
      {
        where: { email: usuario.email }
      },

    )

    if (!existUser) {
      return res.status(401).json({ msg: "Esta cuenta no esta registrada" })
    }

    const passwordEncriptado = await existUser.password

    const compararPassword = await passwordCorrecto(usuario.password, passwordEncriptado)

    if (compararPassword) {

      const token = await generarToken(existUser.email)

      const data = {
        user: existUser,
        token,
      }

      return res.status(200).json({ msg: "Session y token valido", data })

    } else {

      return res.status(403).json({ msg: "Clave invalida" })
    }

  } catch (error) {
    console.log(error)
  }
}

export const perfil = async (req: any, res: Response) => {


  try {

    const usuarioRegistado = await User.findOne(req.usuarioId)

    if (!usuarioRegistado) return res.status(404).json({ message: "No se encontro el pefil" })

    res.status(200).json({ message: "Perfil del usuario", usuarioRegistado })

  } catch (error) {
    console.log(error)
  }
}

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await User.findAll();
  
    if (!allUsers.length) {
      throw new Error("No hay usuarios registrados");
    } else {
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });
  }
}
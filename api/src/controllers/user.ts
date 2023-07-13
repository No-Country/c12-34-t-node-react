import { Provider, User } from '../models/relations'
import { Request, Response } from "express"
import { IUser } from '../interfaces/IUser';
import { passwordHashado, passwordCorrecto } from '../helper/bcrypt';
import { generarToken } from "../helper/JWToken"
import { Elements } from '../models/relations';

export const registerUser = async (req: Request, res: Response) => {


  const usuario = req.body as IUser

  try {

    if (!usuario.user || !usuario.password || !usuario.email)

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
      user: usuario.user,
      // lastName: usuario.lastName,
      email: usuario.email,
      password: encriptado,
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

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const allUsers = await User.findAll({
      include: [{
        model: Elements,
        attributes: ["name"],
      }, {
        model: Provider,
        attributes: ["name"]
      }],
      attributes: ["id", "user", "email"],
    });

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

export const upDateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: IUser = req.body;

  try {
    if (id.length < 36) {
      throw new Error("El usuario no existe");
    } else {
      await User.update(user, {
        where: { id, },
      });

      return res.status(200).json({ change: "Actualización del usuario completa", user, });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en upDateUser por:" + error });
  }
}
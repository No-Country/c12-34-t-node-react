import { Request, Response } from "express"
import { IAdmin } from "../../interfaces/IAdmin"
import { Admin } from "../../models/relations"
import { passwordCorrecto } from "../../helper/bcrypt"
import { generarToken } from "../../helper/JWToken"
import { validateLogin } from "../../validations/login"

export const loginUser = async (req: Request, res: Response) => {
  const usuario = req.body as IAdmin

  try {
    const validation = await validateLogin(usuario);

    const existUser = await Admin.findOne({
      where: {
        email: validation.email
      }
    });

    if (!existUser) {
      return res.status(401).json({ error: "Esta cuenta no esta registrada" })
    }

    const passwordEncriptado = existUser.password

    const compararPassword = await passwordCorrecto(validation.password, passwordEncriptado)

    if (compararPassword) {
      const token = await generarToken(existUser.email)

      const data = {
        user: existUser,
        token,
      }

      return res.status(200).json({ msg: "Session y token valido", data })
    } else {
      return res.status(403).json({ error: "Clave invalida" })
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    console.log(error)
  }
}
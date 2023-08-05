import { Request, Response } from "express";
import { IAdmin } from "../../interfaces/IAdmin";
import { Admin } from "../../models/relations";
import { passwordHashado } from "../../helper/bcrypt";






export const registerUser = async (req: Request, res: Response) => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const dominiosPermitidos = ['gmail.com', 'hotmail.com', "yahoo.com", "yahoo.es", "outlook.com", "outlook.es"];
  const dominiosPermitidosRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`, 'i');
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
  const number = /[0-9]/

  const usuario = req.body as IAdmin;


  try {


    if (!usuario.user || !usuario.password) {
      return res.status(400).json({ message: "Todos los campos son requeridos" })
    }

    if (usuario.user.match(number)) {
      return res.status(400).json({ message: "Debes colocar un nombre valido" })
    }

    if (usuario.user.length < 3) {
      return res.status(400).json({ message: "Debes colocar un nombre mayor a 3 caracteres " })
    }

    if (!usuario.email) {
      return res.status(400).json({ message: 'Debe ingresar un correo' });
    }

    if (!emailRegex.test(usuario.email) || !dominiosPermitidosRegex.test(usuario.email)) {
      return res.status(400).json({ message: 'El correo electrónico no es válido' });
    }


    if (!regexPassword.test(usuario.password)) {
      return res.status(400).json(
        { message: 'La contraseña debe contener al menos 8 caracteres incluyendo: mayúsculas, minúsculas, números y caracteres especiales ( @, $, !, %, *, ?, _ , - o &.)' }
      );
    }


    if (!usuario.user || !usuario.password || !usuario.email)
      return res.status(400).json({ msg: "Todos los campos son requeridos" });

    const existUser = await Admin.findOne({
      where: { email: usuario.email },
    });

    if (existUser) {
      return res.status(400).json({ msg: "El usuario ya existe", existUser });
    }

    const encriptado = await passwordHashado(usuario.password);

    const newUser = await Admin.create({
      user: usuario.user,
      email: usuario.email,
      password: encriptado,
    });

    if (newUser) {
      return res.status(200).json({ msg: "Usuario creado", newUser });
    }
  } catch (error) {
    console.log(error);
  }
}


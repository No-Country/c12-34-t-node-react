import { Request, Response } from "express";
// import { IUser } from "../../interfaces/IUser";
// import { User } from "../../models/relations";
// import { passwordHashado } from "../../helper/bcrypt";
import { IClient } from '../interfaces/IClient';
import Client from "../models/Clientes";

export const clientUser = async (req: Request, res: Response) => {
  const usuario = req.body as IClient;

  try {
    if (!usuario.name || !usuario.password || !usuario.email)
      return res.status(400).json({ msg: "Todos los campos son requeridos" });

    const existUser = await Client.findOne({
      where: { email: usuario.email },
    });

    if (existUser) {
      return res.status(400).json({ msg: "El usuario ya existe", existUser });
    }

    // const encriptado = await passwordHashado(usuario.password);

    const newUser = await Client.create({
      name: usuario.name,
      email: usuario.email,
      password: usuario.password,
      plan: usuario.plan,
      dateIn: usuario.dateIn,
      dateOut: usuario.dateOut,
      contact: usuario.contact

    });

    if (newUser) {
      return res.status(200).json({ msg: "Usuario creado", newUser });
    }
  } catch (error) {
    console.log(error);
  }
};

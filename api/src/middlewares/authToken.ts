import Jwt from "jsonwebtoken";
import User from "../models/User";
import { NextFunction, Request, Response } from "express";
import { IPayload } from "../interfaces/IPayload";

export const authToken = async (req: any, res: Response, next: NextFunction) => {
  // console.log("REQ.USERID:", typeof req)

  if (req.headers.authorization) {

    try {
      const token = req.headers.authorization.split(" ")[1]

      const payload = Jwt.verify(token, process.env.TOKEN || "CL@VE") as IPayload

      const usuarioid = await User.findOne({
        where: { email: payload.id },
      })
      req.usuarioId = usuarioid

      return next()

    } catch (error) {
      return res.status(400).json({ message: "Sesion o token invalido" })
    }
  }
  return next()
}

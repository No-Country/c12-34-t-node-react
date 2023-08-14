import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Admin } from "../models/relations";
import { TypeRole } from "../interfaces/IAdmin";
const { TOKEN } = process.env;

export const checkRoleMiddleware = (role: TypeRole) => {
  return async (req: Request, res: Response, next: NextFunction) => {

    if (req.rawHeaders) {
      try {
        // const token = req.headers.authorization.split(' ')[1]; // ?
        const token = req.rawHeaders[1].split(' ')[1];

        if (!token) {
          return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
        }

        const decodedToken = jwt.verify(token, TOKEN as string) as JwtPayload
        // console.log("DECODED TOKEN:", decodedToken)
        // console.log("DECODED TOKEN:", decodedToken.id)
        console.log("ROLE:", role)
        const admin = await Admin.findOne({
          where: {
            email: decodedToken.id // CORREO DEL ADMIN
          }
        })
        console.log("ROLE - 2:", admin?.role)
        
        if (admin?.role !== role) {
          return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
        }
        
        // const userRole = decodedToken.role;
        // if (role.includes(userRole)) {
        //   return res.status(403).json({ message: 'No tienes permiso para acceder a esta ruta.' });
        // }
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado.' });
      }
    }
  };
};

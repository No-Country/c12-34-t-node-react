import { number } from "../helper/utils";
import { IAdmin } from "interfaces/IAdmin";
import { validationEmail } from "./gmail";
import { validationPassword } from "./password";

export const validateRegister = (admin: IAdmin): IAdmin => {
  
  if (!admin.user && !admin.password && !admin.email) {
    throw new Error("Todos los campos son requeridos")
  }

  if (admin.user.match(number)) {
    throw new Error("Debes colocar un nombre valido")
  }

  if (admin.user.length < 3) {
    // return res.status(400).json({ message: "Debes colocar un nombre mayor a 3 caracteres" })
    throw new Error("Debes colocar un nombre mayor a 3 caracteres")
  }

  validationEmail(admin.email);

  validationPassword(admin.password);
  
  if (validationPassword(admin.password) !== admin.confirmPassword) {
    throw new Error("El password no coincide")
  }

  return admin;
}
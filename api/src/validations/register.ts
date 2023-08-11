import { IAdmin } from "interfaces/IAdmin";
import { validationEmail } from "./gmail";
import { validationPassword } from "./password";
import { validationFullName } from "./name";

export const validateRegister = (admin: IAdmin): IAdmin => {
  
  if (!admin.user && !admin.password && !admin.email) {
    throw new Error("Todos los campos son requeridos")
  }

  validationFullName(admin.user);

  validationEmail(admin.email);

  validationPassword(admin.password);

  if (validationPassword(admin.password) !== admin.confirmPassword) {
    throw new Error("El password no coincide")
  }

  return admin;
}
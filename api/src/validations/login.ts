// import { dominiosPermitidosRegex, emailRegex, regexPassword, validationEmail, validationPassword } from "../helper/utils";
import { IAdmin } from "interfaces/IAdmin";
import { validationEmail } from "./gmail";
import { validationPassword } from "./password";

export const validateLogin = (admin: IAdmin): IAdmin => {
  
  if (!admin.email && !admin.password) {
    throw new Error("Todos los campos son requeridos")// OK
  }

  validationEmail(admin.email);

  validationPassword(admin.password);

  return admin;
}
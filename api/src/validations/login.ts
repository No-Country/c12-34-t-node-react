import { IAdmin } from "interfaces/IAdmin";
import { validationEmail } from "./items/gmail";
import { validationPassword } from "./items/password";
import { Admin } from "../models/relations";

export const validateLogin = async (admin: IAdmin): Promise<IAdmin> => {
  
  if (!admin.email && !admin.password) {
    throw new Error("Todos los campos son requeridos")// OK
  }

  validationEmail(admin.email);

  const allUsers = await Admin.findAll({
    where: {
      email: admin.email
    }
  })

  if (!allUsers.length) {
    throw new Error('Esta cuenta no está registrada');
  }

  validationPassword(admin.password);

  return admin;
}
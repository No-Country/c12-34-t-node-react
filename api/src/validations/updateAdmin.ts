import { Admin } from "../models/Admin";
import { IAdmin } from "../interfaces/IAdmin";
import { validationEmail } from "./items/gmail";
import { validationFullName } from "./items/name";

export const validateUpdateAdmin = async (admin: IAdmin): Promise<IAdmin> => {

  // SE VERIFICAN TODOS LOS CAMPOS
  if (!admin.user && !admin.email) {
    throw new Error("Todos los campos son requeridos");
  }

  // SE VERIFICA QUE NO TENGA NUMEROS Y CANTIDAD DE LETRAS
  validationFullName(admin.user);

  // SE VERIFICA QUE EL CORREO SEA VALIDO
  validationEmail(admin.email);

  // SE BUSCA EL USUARIO
  const allAdmin = await Admin.findOne({
    where: {
      user: admin.user,
      email: admin.email,
    }
  });

  // SE COMPRUEBA SI EL USUARIO YA EXISTE
  if (allAdmin?.user && allAdmin.email) {
    throw new Error("Los datos del usuario ya se encuentran registrados");
  }

  return admin;
}
import { validationEmail } from "./items/gmail";
import { IEmployees } from "interfaces/IEmployees";
import { validationFullName } from "./items/name";
import { regexPhone } from "../helper/regex";

export const validateEmployees = (employees: IEmployees): IEmployees => {
  
  if (!employees.name && !employees.email && !employees.contact && !employees.occupation) {
    throw new Error("Todos los campos son requeridos");
  }

  validationFullName(employees.name);

  validationEmail(employees.email);

  if (!regexPhone.test(employees.contact)) {
    throw new Error("Número de contacto invalido");
  }

  if (employees.occupation.length < 5) {
    throw new Error("La ocupación debe tener más de 4 caracteres");
  }

  return employees;
}
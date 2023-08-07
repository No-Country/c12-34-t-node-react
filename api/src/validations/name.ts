import { number } from "../helper/utils";

export const validationName = (name: string): string => {

  // SE VERIFICA QUE EL NOMBRE NO TENGA NUMEROS INCLUIDOS
  if (name.match(number)) {
    throw new Error("Debes colocar un nombre valido")
  }

  // SE VERIFICA QUE EL NOMBRE TENGA MINIMO 3 CARACTERES
  if (name.length < 3) {
    // return res.status(400).json({ message: "Debes colocar un nombre mayor a 3 caracteres" })
    throw new Error("Debes colocar un nombre mayor a 3 caracteres")
  }

  return name;
}
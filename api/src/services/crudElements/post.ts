import { Request, Response } from "express";
import { IElements, State } from "../../interfaces/IElements";
import Elements from "../../models/Element";

export const postElementsGym = async (req: Request, res: Response) => {
  const element = req.body as IElements;

  const errorName = typeof element.name !== "string" || element.name.length === 0
  const errorType = typeof element.type !== "string" || element.type.length === 0
  const errorDescription = typeof element.description !== "string" || element.description.length <= 11
  const errorPrice = typeof element.price !== "number"
  const errorDate = typeof element.date !== "string" || !Boolean(Date.parse(element.date)) || element.date.length < 10
  const errorState = typeof element.state !== "string" || !Object.values(State).includes(element.state)
  
  try {
    if (errorName && errorType && errorDescription && errorPrice && errorDate && errorState) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre`);
    if (errorType) throw new Error(`Incorrecto o falta el tipo`);
    if (errorDescription) throw new Error(`Incorrecto o falta el tipo`);
    if (errorPrice) throw new Error(`Incorrecto o falta el precio`);
    if (errorDate) throw new Error(`Incorrecto o falta la fecha`);
    if (errorState) throw new Error(`Incorrecto o falta el estado`);
    else {
      let postElement = await Elements.create(element);
      return res.status(200).json({ message: `Ah sido agregado un nuevo elemento`, postElement });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postElementsGym por:" + error, });
  }
}
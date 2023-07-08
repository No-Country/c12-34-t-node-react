import { IElements, State } from "../interfaces/IElements";
import { getElements } from "../controllers/getElemets";
import { Request, Response } from "express";
import Elements from "../models/Element";
// import { createElement } from "../validations/element";
// import { validations } from "../validations/validation";

export const getElementsGym = async (_: Request, res: Response) => {
  try {
    const infoElements = await getElements();
    if (infoElements.length) {
      return res.status(200).json(infoElements);
    }
  } catch (error) {
    return res.status(400).json({ error: "Error en getElementsGym por:" + error, });    
  }
}

export const postElementsGym = async (req: Request, res: Response) => {
  const element = req.body as IElements;

  const errorName = typeof element.name !== "string" || element.name.length === 0
  const errorType = typeof element.type !== "string" || element.type.length === 0
  const errorDescription = typeof element.description !== "string" || element.description.length <= 11
  const errorPrice = typeof element.price !== "number"
  const errorYear = typeof element.year !== "number"
  const errorState = typeof element.state !== "string" || !Object.values(State).includes(element.state)
  
  try {
    if (errorName && errorType && errorDescription && errorPrice && errorYear && errorState) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre`);
    if (errorType) throw new Error(`Incorrecto o falta el tipo`);
    if (errorDescription) throw new Error(`Incorrecto o falta el tipo`);
    if (errorPrice) throw new Error(`Incorrecto o falta el precio`);
    if (errorYear) throw new Error(`Incorrecto o falta el año`);
    if (errorState) throw new Error(`Incorrecto o falta el estado`);
    else {
      let postElement = await Elements.create(element);
      // console.log("CREATE:", postElement)
      return res.status(200).json({ message: `Ah sido agregado un nuevo elemento`, postElement });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postElementsGym por:" + error, });
  }
}

export const putElemetsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  const current = req.body as IElements;

  try {
    if (id.length < 36) {
      throw Error(`El elemento no existe`);
    } else {
      await Elements.update(current, {
        where: {
          id,
        }
      });
    
      return res.status(200).json({ change: "Los datos del elemento se actualizaron", current });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en putElemetsGym por:" + error });
  }
}

export const deleteElementsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    
    if (id.length < 36) {
      throw Error(`El elemento no existe`);
    } else {
      await Elements.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El elemento ha sido eliminado", });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteElementsGym por:" + error });
  }
}
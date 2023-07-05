import { IElements } from "interfaces/IElements";
import { getElements } from "../controllers/getElemets";
import { Request, Response } from "express";
import Elements from "../models/Element";

export const getElementsGym = async (_: Request, res: Response) => {
  try {
    const infoElements = await getElements();
    if (infoElements.length) {
      return res.json(infoElements);
    }
  } catch (error) {
    return res.json({ error: "Error en getElementsGym por:" + error, });    
  }
}

export const postElementsGym = async (req: Request, res: Response) => {
  const element = req.body as IElements;

  try {
    let postElement = await Elements.create({
      name: element.name,
      type: element.type,
      description: element.description,
      price: element.price,
      year: element.year,
      image: element.image,
      state: element.state,
    });

    return res.json(postElement);
  } catch (error) {
    return res.json({ error: "Error en postElementsGym por:" + error, });
  }
}

export const putElemetsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  const current = req.body as IElements;

  try {
    await Elements.update(current, {
      where: {
        id,
      }
    });
  
    return res.json({ change: "Los datos del elemento se actualizaron", current });
  } catch (error) {
    return res.json({ error: "Error en putElemetsGym por:" + error });
  }
}

export const deleteElementsGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const element = await Elements.findByPk(id);
    
    if (!element) {
      return res.json({ mesage: "El elemento no existe" });
    } else {
      await Elements.destroy({
        where: {
          id
        }
      });
      return res.json({ mesage: "El elemento ha sido eliminado", element });
    }
  } catch (error) {
    return res.json({ error: "Error en deleteElementsGym por:" + error });
  }
}
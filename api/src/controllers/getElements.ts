import { IElements } from "interfaces/IElements";
import Elements from "../models/Element";

const elementsGym = require("../../db.json");

export const getElements = async () => {

  const elementsInDb = await Elements.findAll();

  if (!elementsInDb.length) {
    let elements = elementsGym.map((el: IElements) => {
      return {
        name: el.name,
        type: el.type,
        description: el.description,
        price: el.price,
        date: el.date,
        state: el.state,
      }
    });

    elements = await Elements.bulkCreate(elements);

    return elements;
  } else {
    return elementsInDb;
  }
}
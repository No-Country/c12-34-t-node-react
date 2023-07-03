import { IElements } from "interfaces/IElements";

const elementsGym = require("../../db.json");

export const getElements = async () => {
  let elements = elementsGym.map((el: IElements) => {
    return {
      id: el.id,
      name: el.name,
      type: el.type,
      description: el.description,
      price: `$${el.price.toLocaleString()} USD`,
      year: el.year,
      image: el.image,
      state: el.state,
    }
  });

  return elements;
  // const elementsInDb = await Element.findAll();

  // if (!elementsInDb.length) {
  //   let elements = elementsGym.map((el: IElements) => {
  //     return {
  //       id: el.id,
  //       name: el.name,
  //       type: el.type,
  //       description: el.description,
  //       value: el.value,
  //       year: el.year,
  //       image: el.image,
  //       state: el.state,
  //     }
  //   });

  //   return elements;
  // } else {
  //   return elementsInDb;
  // }
}
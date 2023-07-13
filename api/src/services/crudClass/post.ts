import { Request, Response } from "express";
import { Clases_Grupales, ClassGroup } from "interfaces/IClassGroup";
import { Class, User } from "../../models/relations";

export const postClassGym = async (req: Request, res: Response) => {
  const clase = req.body as Clases_Grupales;

  const errorName = typeof clase.name !== "string" || clase.name.length === 0
  const errorTrainer = typeof clase.trainer !== "string" || clase.trainer.length === 0
  const errorTime = typeof clase.time !== "string" || clase.time.length === 0
  const errorHour = typeof clase.hour !== "string" || clase.hour.length === 0
  const errorInDay = typeof clase.inDay !== "string" || clase.inDay.length === 0
  
  try {
    if (errorName && errorTrainer && errorTime && errorHour && errorInDay) {
      throw new Error(`Faltan todas las propiedades`);
    }
    if (errorName) throw new Error(`Incorrecto o falta el nombre de la clase`);
    if (errorTrainer) throw new Error(`Incorrecto o falta el nombre del trainer`);
    if (errorTime) throw new Error(`Incorrecto o falta la duración de la clase`);
    if (errorHour) throw new Error(`Incorrecto o falta la hora de la clase`);
    if (errorInDay) throw new Error(`Incorrecto o falta la jornada de la clase`);
    else {
      let createClass = await Class.create(clase, {
        // include: "users",
        include: [User],
      });
      createClass = JSON.parse(JSON.stringify(createClass))
      console.log("CREATE:", createClass)

      return res.status(200).json({ message: `Ah sido agregado una nueva clase`, createClass });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postClassGym por:" + error, });
  }
}
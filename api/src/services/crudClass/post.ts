import { Request, Response } from "express";
import { IClassGroup } from "../../interfaces/IClassGroup";
import { Admin, ClassGroup } from "../../models/relations";
import { validationClass } from "../../validations/classGym";

export const postClassGym = async (req: Request, res: Response) => {
  const clase = req.body as IClassGroup;
  
  try {
    const validations = validationClass(clase);
    const userId = await Admin.findByPk(clase.adminId)

    let createClass = await ClassGroup.create({
      name: validations.name,
      trainer: validations.trainer,
      duration: validations.duration,
      schedule: validations.schedule,
      inDay: validations.inDay,
      weekDays: validations.weekDays,
      img: clase.img || "https://pymstatic.com/6843/conversions/spinning-wide.jpg",
      adminId: clase.adminId
    });
    // createClass = JSON.parse(JSON.stringify(createClass))
    // console.log("CREATE:", createClass)

    return res.status(200).json({ message: `Ah sido agregada una nueva clase grupal`, createClass });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en postClassGym por:" + error, });
  }
}
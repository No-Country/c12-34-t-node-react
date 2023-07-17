import { Request, Response } from "express";
import { Expense, User } from "../../models/relations";

export const getExpensesGym = async (_: Request, res: Response) => {
  try {
    const expenses = await Expense.findAll({
      include: {
        model: User,
        attributes: ["user"],
      },
    });
    if (!expenses.length) {
      return res.status(400).json({ msg: "De momento no se han añadido gastos mensuales" });
    }
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(400).json({ error: "Error en getExpensesGym por:" + error, });    
  }
}
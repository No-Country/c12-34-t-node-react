import { Request, Response } from "express";
import { Expense } from "../../models/relations";

export const deleteExpensesGym = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    
    if (id.length < 36) {
      throw Error(`El gastos no existe`);
    } else {
      await Expense.destroy({
        where: {
          id
        }
      });
      return res.status(200).json({ message: "El gasto ha sido eliminado", });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).json({ error: error.message, });
    }
    return res.status(400).json({ error: "Error en deleteExpensesGym por:" + error });
  }
}
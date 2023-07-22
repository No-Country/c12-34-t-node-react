import { IElements, Types } from "./../interfaces/IElements";
import { db } from "../db";
import { Model, DataTypes } from "sequelize";
import { State } from "./../interfaces/IElements";
class Elements extends Model<IElements> implements IElements {
  id!: string;
  name!: string;
  type!: string;
  description!: string;
  price!: number;
  date!: string;
  state!: State;
}
Elements.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM(
        State.En_reparacion,
        State.Nuevo,
        State.Usado,
      ),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      // type: DataTypes.ENUM(
      //   Types.Element,
      //   Types.Machine,
      //   Types.Office,
      // ),
      // defaultValue: "Elemento",
      type: DataTypes.STRING,
      // allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // MAQUINAS OH ELEMENTOS - MOBILIARIO
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "elements",
    timestamps: false,
  }
);
export default Elements;
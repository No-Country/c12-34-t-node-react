import { IElements } from "./../interfaces/IElements";
import { db } from "../db";
import { Model, DataTypes } from "sequelize";
import { enumState } from "./../interfaces/IElements";
class Elements extends Model<IElements> implements IElements {
  id!: string;
  name!: string;
  type!: string;
  description!: string;
  price!: number;
  year!: number;
  image!: string;
  state!: enumState;
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // isSelected: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  },
  {
    sequelize: db,
    modelName: "elements",
    timestamps: false,
  }
);
export default Elements;

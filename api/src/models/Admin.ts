import { db } from "../db";
import { IAdmin, Rol } from '../interfaces/IAdmin';
import { Model, DataTypes } from "sequelize";
import Roles from "./Roles";

export class Admin extends Model<IAdmin> implements IAdmin {
  id!: string;
  user!: string;
  email!: string;
  password!: string;
  role!: Rol
}

Admin.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      unique: true
    },
    role: {
      type: DataTypes.ENUM(
        Rol.Admin,
        Rol.Client,
        Rol.Employees
      ),
      defaultValue: Rol.Admin

    }
  },
  {
    sequelize: db,
    modelName: "admin",
    timestamps: false,
  }
);

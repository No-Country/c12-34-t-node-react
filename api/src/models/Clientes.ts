import { IClient } from "../interfaces/IClient";
import { db } from "../db";
import { Model, DataTypes } from "sequelize";

class Client extends Model<IClient> implements IClient {
  id!: string;
  googleId!: string;
  name!: string;
  email!: string;
  password!: string;
  photo!: string;
  plan!: string;
  dateIn!: string;
  dateOut!: string;
  contact!: string;
  // rol!: Rol;
}

Client.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    plan: {
      type: DataTypes.STRING,
    },
    dateIn: {
      type: DataTypes.STRING,
    },
    dateOut: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "client",
    timestamps: false,
  }
);


export default Client;

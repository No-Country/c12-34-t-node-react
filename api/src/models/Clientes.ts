import { IClient } from "../interfaces/IClient";
import { db } from "../db";
import { Model, DataTypes } from "sequelize";
import { TypeRole } from "../interfaces/IAdmin";

class Client extends Model<IClient> implements IClient {
  id!: string;
  googleId!: string;
  name!: string;
  email!: string;
  photo!: string;
  plan!: string;
  dateIn!: string;
  dateOut!: string;
  contact!: string;
  role!: TypeRole
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
    plan: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dateIn: {
      type: DataTypes.STRING,
    },
    dateOut: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM(TypeRole.Client),
      defaultValue: TypeRole.Client
    },
  },
  {
    sequelize: db,
    modelName: "client",
    timestamps: false,
  }
);

export default Client;

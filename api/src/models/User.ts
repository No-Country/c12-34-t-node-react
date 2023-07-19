import { db } from "../db";
import { IUser, Rol } from "../interfaces/IUser";
import { Model, DataTypes } from "sequelize";

class User extends Model<IUser> implements IUser {
  id!: string;
  googleId!: string;
  user!: string;
  email!: string;
  password!: string;
  photo!: string;
  // PARA EL CLIENTE
  plan!: string;
  dateIn!: string;
  dateOut!: string;
  contact!: string;
  // PARA EL CLIENTE
  // PARA EL EMPLEADOR
  occupation!: string;
  // PARA EL EMPLEADOR
  rol!: Rol;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    googleId: {
      type: DataTypes.STRING,
      // allowNull: false
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
    photo: {
      type: DataTypes.TEXT,
      // allowNull: false
    },
    rol: {
      type: DataTypes.ENUM(Rol.Admin, Rol.Employees, Rol.Client),
      // allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: true
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
    occupation: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
    timestamps: false,
  }
);


export default User;

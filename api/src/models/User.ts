import { db } from "../db";
import { IUser, Rol } from "../interfaces/IUser";
import { Model, DataTypes } from "sequelize";

class User extends Model<IUser> implements IUser {
  id!: string;
  user!: string;
  // lastName!: string;
  email!: string;
  password!: string;
  rol!: Rol;
}

User.init(
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
    // lastName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // validate: {
      //   isEmail: true,
      // },
    },
    rol: {
      type: DataTypes.ENUM(Rol.Admin, Rol.Employees, Rol.User),
     // allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      unique: true
    },
  },
  {
    sequelize: db,
    modelName: "user",
    timestamps: false,
  }
);


export default User;

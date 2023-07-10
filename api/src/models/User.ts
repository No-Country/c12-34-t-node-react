import { db } from "../db";
import { Elements, IUser } from "../interfaces/IUser";
import { Model, DataTypes } from "sequelize";

class User extends Model<IUser> implements IUser {
  id!: string;
  name!: string;
  // lastName!: string;
  email!: string;
  password!: string;
  elementsUser!: Array<Elements>;
}

User.init(
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
    password: {
      type: DataTypes.STRING,
      unique: true
    },
    elementsUser: {
      type: DataTypes.JSONB(),
    },
  },
  {
    sequelize: db,
    modelName: "user",
    timestamps: false,
  }
);


export default User;

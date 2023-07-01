import { db } from "../db"
import { IUser } from '../interfaces/IUser';
import { Model, DataTypes, UUIDV4 } from 'sequelize';




// import db from "../config/db";
// import bcrypt from "bcrypt";
// import { IUser } from "../interfaces/IUser";

class User extends Model<IUser> implements IUser {
  id!: string;
  name!: string;
  lastName!: string;
  email!: string;
  password!: string;


  // public hash(password: string, salt: string): Promise<string> {
  //     return bcrypt.hash(password, salt);
  // }

  // public validatePassword(password: string): Promise<boolean> {
  //     return this.hash(password, this.salt).then(
  //         (hash) => hash === this.password
  //     );
  // }

}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },

  },
  {
    sequelize: db,
    modelName: "user"
  }
);

// User.addHook("beforeCreate", async (user: User) => {
//     const salt = bcrypt.genSaltSync(9);
//     user.salt = salt;
//     const hash = await bcrypt.hash(user.password, salt);
//     user.password = hash;
// });

export default User;



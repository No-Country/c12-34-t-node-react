import { db } from "../db";
import { IGoogle } from "../interfaces/IGoogle";
import { Model, DataTypes } from "sequelize";

class Google extends Model<IGoogle> implements IGoogle {
  googleId!: string;
  name!: string;
  photo!: string;

}

Google.init(
  {
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false

    },

  },
  {
    sequelize: db,
    modelName: "google",
    timestamps: false,
  }
);


export default Google;

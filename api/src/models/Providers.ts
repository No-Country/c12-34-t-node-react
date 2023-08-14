import { db } from "../db";
import { IProvider } from "../interfaces/IProviders"
import { Model, DataTypes } from "sequelize";

class Provider extends Model<IProvider> implements IProvider {
  id!: string;
  name!: string;
  product!: string;
  contact!: string;
  email!: string;
  provider!: string;
}

Provider.init(
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
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    provider: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "provider",
    timestamps: false,
  }
);

export default Provider;

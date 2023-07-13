import { ClassGroup, InDay } from "../interfaces/IClassGroup";
import { db } from "../db";
import { Model, DataTypes } from "sequelize";

class Class extends Model<ClassGroup> implements ClassGroup {
  id!: string;
  name!: string;
  trainer!: string;
  time!: string;
  hour!: string;
  inDay!: InDay;
}

Class.init(
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
    trainer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inDay: {
      type: DataTypes.ENUM(InDay.Afternoon, InDay.Morning, InDay.Night),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "class",
    timestamps: false,
  }
);


export default Class;

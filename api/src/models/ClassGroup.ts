import { db } from "./../db";
import { Model, DataTypes, Sequelize } from "sequelize";
import { IClassGroup } from "../interfaces/IClassGroup";

interface ClassGroup {
  id: number;
  userId: number;
  classId: number;
}

class Classes extends Model<ClassGroup> implements ClassGroup {
  id!: number;
  userId!: number;
  classId!: number;
}

Classes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "classes" }
);

module.exports = Classes;

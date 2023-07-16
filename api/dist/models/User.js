"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const IUser_1 = require("../interfaces/IUser");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    user: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    rol: {
        type: sequelize_1.DataTypes.ENUM(IUser_1.Rol.Admin, IUser_1.Rol.Employees, IUser_1.Rol.Client),
        // allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    plan: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateIn: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOut: {
        type: sequelize_1.DataTypes.STRING,
    },
    contact: {
        type: sequelize_1.DataTypes.STRING,
    },
    occupation: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_1.db,
    modelName: "user",
    timestamps: false,
});
exports.default = User;

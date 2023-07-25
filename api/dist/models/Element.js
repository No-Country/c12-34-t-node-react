"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
const IElements_1 = require("./../interfaces/IElements");
class Elements extends sequelize_1.Model {
}
Elements.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.ENUM(IElements_1.State.En_reparacion, IElements_1.State.Nuevo, IElements_1.State.Usado),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        // type: DataTypes.ENUM(
        //   Types.Element,
        //   Types.Machine,
        //   Types.Office,
        // ),
        // defaultValue: "Elemento",
        type: sequelize_1.DataTypes.STRING,
        // allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    // MAQUINAS OH ELEMENTOS - MOBILIARIO
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.db,
    modelName: "elements",
    timestamps: false,
});
exports.default = Elements;

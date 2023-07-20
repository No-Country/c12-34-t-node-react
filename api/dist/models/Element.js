"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IElements_1 = require("./../interfaces/IElements");
const db_1 = require("../db");
const sequelize_1 = require("sequelize");
const IElements_2 = require("./../interfaces/IElements");
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
    // MAQUINAS OH ELEMENTOS - MOBILIARIO
    type: {
        type: sequelize_1.DataTypes.ENUM(IElements_1.Types.Element, IElements_1.Types.Machine, IElements_1.Types.Office),
        // defaultValue: "Elemento",
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: sequelize_1.DataTypes.ENUM(IElements_2.State.En_reparacion, IElements_2.State.Nuevo, IElements_2.State.Usado),
        allowNull: false,
    },
}, {
    sequelize: db_1.db,
    modelName: "elements",
    timestamps: false,
});
exports.default = Elements;

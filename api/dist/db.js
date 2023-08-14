"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const { CONNECTION, DEPLOY } = process.env;
// export const db = new Sequelize(CONNECTION as string, {
//   logging: false,
// });
exports.db = new sequelize_1.Sequelize(DEPLOY, {
    logging: false,
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

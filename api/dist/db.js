"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
exports.db = new sequelize_1.Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    dialect: "postgres",
    logging: false,
});
// export const db = new Sequelize(
//   `${process.env.DEPLOY}`,
//   {
//     host: `${process.env.DB_HOST}`,
//     dialect: "postgres",
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true
//       }
//     }
//   }
// );

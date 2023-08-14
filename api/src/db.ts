import { Sequelize } from "sequelize";
import "dotenv/config";
const { CONNECTION, DEPLOY } = process.env

// export const db = new Sequelize(CONNECTION as string, {
//   logging: false,
// });

export const db = new Sequelize(DEPLOY as string, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true
    }
  }
});

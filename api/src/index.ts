import { app } from "./app";
import { db } from "./db";

const port = process.env.PORT || 3002;

db.sync({ force: false }).then(async () => {
  try {
    app.listen(port, () => {
      console.log(`Escuchando en el puerto: http://localhost:${port}`);
    });
    await db.authenticate();
    console.log("Conexion a sequelize");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
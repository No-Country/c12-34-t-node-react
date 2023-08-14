import { app } from "./app";
import { db } from "./db";
import "dotenv/config";
const { PORT } = process.env;

// Modificar el "force" desde la variable de entorno, ACTIVE || IN_ACTIVE
db.sync({ alter: true }).then(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Escuchandoo en el puerto: http://localhost:${PORT}`);
    });
    await db.authenticate();
    console.log("Conexion a sequelize");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
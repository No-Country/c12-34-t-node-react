import express, { Application, NextFunction, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { db } from "./db";
import morgan from "morgan";
import "../src/models/User";
import allRoutes from "./routes/routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((_req: Request, res: Response, next: NextFunction ) => {
   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
});


app.use(allRoutes);

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

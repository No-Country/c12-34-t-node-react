import express, { Application } from "express";
import "dotenv/config";
import cors from "cors";
import { db } from "./db";
import morgan from "morgan";
import allRoutes from "./routes/routes";
import passport from 'passport'
import session from 'express-session';

const app: Application = express();
app.use(
  cors({
    credentials: true,
    origin: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(passport.initialize())
app.use(session({
  secret: typeof process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}));

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
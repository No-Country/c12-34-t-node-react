import express, { Application, NextFunction, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { db } from "./db";
import morgan from "morgan";
import { router } from "./routes";
import passport from 'passport'
import session from 'express-session';

const app: Application = express();
app.use(
  cors({
    credentials: true,
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT"]
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((_req: Request, res: Response, next: NextFunction) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(passport.initialize())
app.use(session({
  secret: typeof process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: false
}));

app.use(router);

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
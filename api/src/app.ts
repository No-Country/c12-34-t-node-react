import express from "express"
import "dotenv/config"
import cors from "cors"
import { sequelize } from "./db"
import morgan from "morgan"
import "../src/models/User"




const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))


const port = process.env.PORT || 3002



sequelize.sync({ force: true }).then(async () => {
    try {
        app.listen(port, () => {
            console.log(`Escuchando en el puerto: http://localhost:${port}`)
        })
        await sequelize.authenticate();
        console.log('Conexion a sequelize');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

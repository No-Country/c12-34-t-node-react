"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
    origin: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
app.use(passport_1.default.initialize());
app.use((0, express_session_1.default)({
    secret: typeof process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}));
app.use(routes_1.router);
const port = process.env.PORT || 3002;
db_1.db.sync({ force: false }).then(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(port, () => {
            console.log(`Escuchando en el puerto: http://localhost:${port}`);
        });
        yield db_1.db.authenticate();
        console.log("Conexion a sequelize");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}));

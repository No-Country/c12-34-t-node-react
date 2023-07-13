import User from "./User";
import Elements from "./Element";
import Class from "./Class";
import { db } from "../db";

User.hasMany(Elements);
Elements.belongsTo(User);

const Class_Users = db.define('Class_Users', {}, { timestamps: false });
User.belongsToMany(Class, { through: Class_Users });
Class.belongsToMany(User, { through: Class_Users });

export { User, Elements, Class, };
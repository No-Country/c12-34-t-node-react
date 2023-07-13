import User from "./User";
import Elements from "./Element";
import Class from "./Class";
import { db } from "../db";
import Provider from "./Providers";


User.hasMany(Elements);
Elements.belongsTo(User);

const Class_Users = db.define('Class_Users', {}, { timestamps: false });
User.belongsToMany(Class, { through: Class_Users });
Class.belongsToMany(User, { through: Class_Users });

User.hasMany(Provider);
Provider.belongsTo(User);


export { User, Elements, Provider, Class };

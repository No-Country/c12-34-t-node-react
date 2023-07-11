import User from "./User";
import Elements from "./Element";

User.hasMany(Elements);
Elements.belongsTo(User);

export { User, Elements, };
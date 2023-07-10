import User from "./User";
import Elements from "./Element";

User.hasMany(Elements);
export const ElementsUser = Elements.belongsTo(User, { as: 'elementsUser', });
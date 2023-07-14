import User from "./User";
import Elements from "./Element";
import ClassGroup from "./ClassGroup";
import Provider from "./Providers";
import Expense from "./Expense";

User.hasMany(Elements);
Elements.belongsTo(User);

User.hasMany(ClassGroup);
ClassGroup.belongsTo(User);

User.hasMany(Provider);
Provider.belongsTo(User);

User.hasMany(Expense);
Expense.belongsTo(User);


export { User, Elements, Provider, ClassGroup, Expense };

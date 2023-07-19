import User from "./User";
import Elements from "./Element";
import ClassGroup from "./ClassGroup";
import Provider from "./Providers";
import Expense from "./Expense";
import Income from "./Income";

// RELACION USER VS PRODUCT
User.hasMany(Elements);
Elements.belongsTo(User);

// RELACION USER VS GROUP_CLASS
User.hasMany(ClassGroup);
ClassGroup.belongsTo(User);

// RELACION USER VS PROVIDER
User.hasMany(Provider);
Provider.belongsTo(User);

// RELACION USER VS EXPENSE
User.hasMany(Expense);
Expense.belongsTo(User);

// RELACION USER VS INCOME
User.hasMany(Income);
Income.belongsTo(User);

// RELACION PROVIDER VS PRODUCTS VS ADMIN
Provider.hasMany(Elements);
Elements.belongsTo(Provider);

export { User, Elements, Provider, ClassGroup, Expense, Income, };

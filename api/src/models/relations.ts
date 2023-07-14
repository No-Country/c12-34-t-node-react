import User from "./User";
import Elements from "./Element";
import ClassGroup from "./ClassGroup";
import Provider from "./Providers";


User.hasMany(Elements);
Elements.belongsTo(User);

User.hasMany(ClassGroup);
ClassGroup.belongsTo(User);

User.hasMany(Provider);
Provider.belongsTo(User);


export { User, Elements, Provider, ClassGroup };

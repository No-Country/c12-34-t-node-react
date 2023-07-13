import User from "./User";
import Elements from "./Element";
import Provider from "./Providers";


User.hasMany(Elements);
Elements.belongsTo(User);


User.hasMany(Provider);
Provider.belongsTo(User);


export { User, Elements, Provider };
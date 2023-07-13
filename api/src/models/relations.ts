import User from "./User";
import Elements from "./Element";
import Class from "./Class";
import Provider from "./Providers";

User.hasMany(Elements);
Elements.belongsTo(User);

User.hasMany(Provider);
Provider.belongsTo(User);
//relacionar las clases grupales
User.belongsToMany(Property, { through: Favourites });
Property.belongsToMany(User, { through: Favourites });
Favourites.belongsTo(User, { foreignKey: "userId" });
Favourites.belongsTo(Property, { foreignKey: "propertyId" });

export { User, Elements, Class };

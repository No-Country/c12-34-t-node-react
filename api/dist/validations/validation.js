"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validations = void 0;
const IElements_1 = require("../interfaces/IElements");
const validations = (object) => {
    const errorName = typeof object.name !== "string" || object.name.length === 0;
    const errorType = typeof object.type !== "string" || object.type.length === 0;
    const errorDescription = typeof object.description !== "string" || object.description.length <= 11;
    const errorPrice = typeof object.price !== "number";
    const errorYear = typeof object.date !== "string";
    const errorState = typeof object.state !== "string" || !Object.values(IElements_1.State).includes(object.state);
    if (errorName && errorType && errorDescription && errorPrice && errorYear && errorState) {
        throw new Error(`Incorrect or missing all props`);
    }
    if (errorName)
        throw new Error(`Incorrect or missing name`);
    if (errorType)
        throw new Error(`Incorrect or missing type`);
    if (errorDescription)
        throw new Error(`Incorrect or missing description`);
    if (errorPrice)
        throw new Error(`Incorrect or missing price`);
    if (errorYear)
        throw new Error(`Incorrect or missing year`);
    if (errorState)
        throw new Error(`Incorrect or missing state`);
    else {
        return object;
    }
};
exports.validations = validations;

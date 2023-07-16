"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = void 0;
const IElements_1 = require("../interfaces/IElements");
const isString = (string) => {
    return typeof string === "string";
};
// const parseName = (nameRequest: any): string => {
const parseName = (nameRequest) => {
    if (!isString(nameRequest) || nameRequest.length < 1) {
        throw new Error(`Incorrect or missing name`);
        // throw `Incorrect or missing name`;
    }
    return nameRequest;
};
const parseType = (typeRequest) => {
    if (!isString(typeRequest)) {
        throw new Error(`Incorrect or missing type`);
        // throw `Incorrect or missing type`;
    }
    return typeRequest;
};
const parseDescription = (descriptionRequest) => {
    if (!isString(descriptionRequest) || descriptionRequest.length < 11) {
        throw new Error(`Incorrect or missing description`);
        // throw `Incorrect or missing description`;
    }
    return descriptionRequest;
};
const isNumber = (number) => {
    return typeof number === "number";
};
const parsePrice = (priceRequest) => {
    console.log("priceRequest:", priceRequest);
    console.log("priceRequest:", typeof priceRequest);
    if (!isNumber(priceRequest)) {
        throw new Error(`Incorrect or missing price`);
        // throw `Incorrect or missing price`;
    }
    return priceRequest;
};
const parseYear = (yearRequest) => {
    console.log("yearRequest:", yearRequest);
    console.log("yearRequest:", typeof yearRequest);
    if (!isNumber(yearRequest)) {
        throw new Error(`Incorrect or missing year`);
        // throw `Incorrect or missing year`;
    }
    return yearRequest;
};
const isState = (paramState) => {
    // console.log("paramState:", paramState)
    // console.log("paramState:",typeof paramState)
    return Object.values(IElements_1.State).includes(paramState);
};
const parseState = (stateRequest) => {
    // console.log("stateRequest:", stateRequest)
    // console.log("stateRequest:",typeof stateRequest)
    if (!isString(stateRequest) || !isState(stateRequest)) {
        throw new Error(`Incorrect or missing state`);
        // throw `Incorrect or missing state`;
    }
    return stateRequest;
};
const createElement = (object) => {
    const newElement = {
        name: parseName(object.name),
        type: parseType(object.type),
        description: parseDescription(object.description),
        price: parsePrice(object.price),
        // date: parseYear(object.date),
        state: parseState(object.state),
    };
    return newElement;
};
exports.createElement = createElement;

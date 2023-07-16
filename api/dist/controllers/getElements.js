"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getElements = void 0;
const relations_1 = require("../models/relations");
const relations_2 = require("../models/relations");
const elementsGym = require("../../db.json");
const getElements = () => __awaiter(void 0, void 0, void 0, function* () {
    const elementsInDb = yield relations_2.Elements.findAll({
        include: {
            model: relations_1.User,
            attributes: ["user", "email"],
        },
    });
    if (!elementsInDb.length) {
        let elements = elementsGym.map((el) => {
            return {
                name: el.name,
                type: el.type,
                description: el.description,
                price: el.price,
                date: el.date,
                state: el.state,
            };
        });
        elements = yield relations_2.Elements.bulkCreate(elements);
        return elements;
    }
    else {
        return elementsInDb;
    }
});
exports.getElements = getElements;

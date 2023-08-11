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
exports.postClassGym = void 0;
const relations_1 = require("../../models/relations");
const classGym_1 = require("../../validations/classGym");
const postClassGym = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clase = req.body;
    try {
        const validations = (0, classGym_1.validationClass)(clase);
        let createClass = yield relations_1.ClassGroup.create({
            name: validations.name,
            trainer: validations.trainer,
            duration: validations.duration,
            schedule: validations.schedule,
            inDay: validations.inDay,
            weekDays: validations.weekDays,
            img: validations.img,
            adminId: clase.adminId
        });
        return res.status(200).json({ message: `Ah sido agregada una nueva clase grupal`, createClass });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message, });
        }
        return res.status(400).json({ error: "Error en postClassGym por:" + error, });
    }
});
exports.postClassGym = postClassGym;

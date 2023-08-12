"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationClass = void 0;
const regex_1 = require("../helper/regex");
const IClassGroup_1 = require("../interfaces/IClassGroup");
const name_1 = require("./items/name");
const validationClass = (clase) => {
    // SE VERIFICAN TODOS LOS CAMPOS  
    if (!clase.name && !clase.trainer && !clase.duration && !clase.schedule && !clase.inDay && !clase.weekDays) {
        throw new Error("Todos los campos son requeridos");
    }
    // SE VERIFICA QUE EL NOMBRE NO TENGA NUMEROS INCLUIDOS
    // SE VERIFICA QUE EL NOMBRE TENGA MINIMO 3 CARACTERES
    (0, name_1.validationClassName)(clase.name);
    // SE VERIFICA QUE EL ENTRENADOR NO TENGA NUMEROS INCLUIDOS
    // SE VERIFICA QUE EL ENTRENADOR TENGA MINIMO 3 CARACTERES
    (0, name_1.validationFullName)(clase.trainer);
    // SE VERIFICA EL TIEMPO DE DURACION EN "MINUTOS"
    if (!regex_1.regexDuration.test(clase.duration)) {
        throw new Error(`El tiempo de duración debe ser entre: 30 min - 120 min`);
    }
    // SE VERIFICA LA HORA DE LA CLASE (06:00 AM / am - 22:00 PM / pm)
    if (!regex_1.regexSchedule.test(clase.schedule)) {
        throw new Error(`El horario debe ser entre: 10:00 (AM / am) - 20:00 (PM / pm)`);
    }
    if (!Object.values(IClassGroup_1.InDay).includes(clase.inDay)) {
        throw new Error(`Debes seleccionar una jornada (Mañana - Tarde - Noche)`);
    }
    if (!Object.values(IClassGroup_1.WeekDays).includes(clase.weekDays)) {
        throw new Error(`Debes seleccionar un día (Lunes - Domingo)`);
    }
    if (!regex_1.regexImages.test(clase.img)) {
        throw new Error(`El enlace de la imagen debe ser http / https y con jpeg - jpg - png - gif - bmp`);
    }
    return clase;
};
exports.validationClass = validationClass;

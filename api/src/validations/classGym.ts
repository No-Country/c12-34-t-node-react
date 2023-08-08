import { regexDuration, regexSchedule } from "../helper/utils";
import { IClassGroup, InDay, WeekDays } from "../interfaces/IClassGroup";
import { validationName } from "./name";

export const validationClass = (clase: IClassGroup): IClassGroup => {

  // SE VERIFICA QUE EL NOMBRE NO TENGA NUMEROS INCLUIDOS
  // SE VERIFICA QUE EL NOMBRE TENGA MINIMO 3 CARACTERES
  validationName(clase.name);
  
  // SE VERIFICA QUE EL ENTRENADOR NO TENGA NUMEROS INCLUIDOS
  // SE VERIFICA QUE EL ENTRENADOR TENGA MINIMO 3 CARACTERES
  validationName(clase.trainer);

  // SE VERIFICA EL TIEMPO DE DURACION EN "MINUTOS"
  if (!regexDuration.test(clase.duration)) {
    throw new Error(`El tiempo de duración debe ser entre: 30 min - 120 min`);
  }

  // SE VERIFICA LA HORA DE LA CLASE (06:00 AM / am - 22:00 PM / pm)
  if (!regexSchedule.test(clase.schedule)) {
    throw new Error(`El horario debe ser entre: 06:00 (AM / am) - 22:00 (PM / pm)`);
  }
  
  if (!Object.values(InDay).includes(clase.inDay)) {
    throw new Error(`Debes seleccionar una jornada (Mañana - Tarde - Noche)`);
  }
  
  if (!Object.values(WeekDays).includes(clase.weekDays)) {
    throw new Error(`Debes seleccionar un día (Lunes - Domingo)`);
  }

  return clase;
}
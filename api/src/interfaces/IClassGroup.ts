import { IUser } from "./IUser";

export enum InDay {
  Morning = "Mañana",
  Afternoon = "Tarde",
  Night = "Noche",
}

export interface ClassGroup {
  id?: string;
  name: string;
  trainer: string;
  time: string;
  hour: string;
  inDay: InDay;
}

type nameUsers = Pick<IUser, "user">

// export interface Clases_Grupales extends ClassGroup, nameUsers {
export interface Clases_Grupales extends ClassGroup {
  user: string[]
}

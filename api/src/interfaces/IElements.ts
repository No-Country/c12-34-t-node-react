export enum State {
  Nuevo = "Nuevo",
  SemiNuevo = "Semi-nuevo",
  Usado = "Usado",
  En_reparacion = "En reparacion",
}

//* Interface del Modelo Elements
export interface IElements {
  id?: string,
  name: string,
  type: string,
  description: string,
  price: number,
  date?: string,// PENDIENTE DESCOMENTAR
  state: State,
}

// export interface ElementUser extends IElements {
//   userId: string,
// }

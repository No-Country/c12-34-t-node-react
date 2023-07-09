export enum State {
  Nuevo = "Nuevo",
  SemiNuevo = "Semi-nuevo",
  Usado = "Usado",
  En_reparacion = "En reparacion",
}

export interface IElements {
  id?: string,
  name: string,
  type: string,
  description: string,
  price: number,
  date: string,
  state: State,
}

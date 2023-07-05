export type enumState = "Nuevo" | "Semi nuevo" | "Usado" | "En reparacion";

export interface IElements {
  id?: string,
  name: string,
  type: string,
  description: string,
  price: number,
  year: number,
  image: string,
  state: enumState,
}

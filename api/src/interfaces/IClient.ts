export enum Rol {
  Admin = "Administrador",
  Employees = "Empleados",
  Client = "Clientes",
}
export interface IClient {
  id?: string;
  name: string;
  email: string;
  plan: string;
  dateIn: string;
  dateOut: string;
  contact: string;
  role?: Rol
}

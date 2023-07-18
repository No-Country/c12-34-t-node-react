export enum Rol {
  Admin = "Admin",
  Employees = "Employees",
  Client = "Client",
}

export interface IUser {
  id?: string;
  googleId?: string,
  user: string;
  email: string;
  photo?: string;
  password: string;
  // PARA EL CLIENTE
  plan?: string;
  dateIn?: string;
  dateOut?: string;
  contact?: string;
  // PARA EL CLIENTE
  // PARA EL EMPLEADOR
  occupation?: string;
  // PARA EL EMPLEADOR
  rol?: Rol;
}

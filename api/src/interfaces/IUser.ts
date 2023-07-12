export enum Rol {
  Admin = "Admin",
  Employees = "Employees",
  User = "User",
}

// export type Elements = {
//   name: string,
// }

export interface IUser {
  id?: string;
  user: string;
  // lastName: string;
  email?: string;
  password: string;
  rol?: Rol;
}

// export interface UserElement extends IUser {
//   elementsUser?: Array<Elements>
// }
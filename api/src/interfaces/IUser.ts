export type Elements = {
  name: string,
}

export interface IUser {
  id?: string;
  name: string;
  // lastName: string;
  email?: string;
  password: string;
  elementsUser: Array<Elements>
}
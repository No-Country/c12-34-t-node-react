export type Elements = {
  name: string,
}

export interface IUser {
  id?: string;
  user: string;
  // lastName: string;
  email?: string;
  password: string;
}

export interface UserElement extends IUser {
  elementsUser?: Array<Elements>
}
import { TypeRole } from "./IAdmin";

export interface IClient {
  id?: string;
  name: string;
  email: string;
  plan: string;
  dateIn: string;
  dateOut: string;
  contact: string;
  role?: TypeRole
}

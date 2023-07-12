export enum InDay {
  Morning = "Mañana",
  Afternoon = "Tarde",
  Night = "Noche",
}

export interface ClassGroup {
  id: string;
  name: string;
  trainer: string;
  time: string;
  hour: string;
  inDay: InDay;
}

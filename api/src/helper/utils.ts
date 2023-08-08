export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const dominiosPermitidos = ['gmail.com', 'hotmail.com', "yahoo.com", "yahoo.es", "outlook.com", "outlook.es"];
export const dominiosPermitidosRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`, 'i');
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
export const number = /[0-9]/;

// https://stackoverflow.com/questions/32044846/regex-for-iso-8601-durations
export const regexDuration = /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/;

//? MAÑANA
// *                                   06-09 | 10-12 : 00 - 59 
// export const regexScheduleMorning = /^(0[6-9]|1[0-2]):[0-5][0-9] ((a)m|(A)M)$/;// OK
export const mañana = /^(0[6-9]|1[0-2]):[0-5][0-9] ((a)m|(A)M)$/;
export const tarde =  /^(1[3-9]|2[0-2]):[0-5][0-9] ((p)m|(P)M)$/;
// export const regexSchedule = mañana ? mañana : tarde;

// *                            06-09 | 10-12| 13-19| 20-22 : 00 - 59 
// export const regexSchedule = /^(0[6-9]|1[0-2]|1[3-9]|2[0-2]):[0-5][0-9] ((a|p)m|(A|P)M)$/;// OK

// *                            06-09 | 10-12 : 00 - 59              | 13-19 | 20-22 : 00 - 59 
export const regexSchedule = /^(0[6-9]|1[0-2]):[0-5][0-9] ((a)m|(A)M)|(1[3-9]|2[0-2]):[0-5][0-9] ((p)m|(P)M)$/;// OK
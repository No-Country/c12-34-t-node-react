export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const dominiosPermitidos = ['gmail.com', 'hotmail.com', "yahoo.com", "yahoo.es", "outlook.com", "outlook.es"];
export const dominiosPermitidosRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`, 'i');
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
export const number = /[0-9]/;

// https://stackoverflow.com/questions/32044846/regex-for-iso-8601-durations
export const regexDuration = /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/;

// https://stackoverflow.com/questions/7536755/regular-expression-for-matching-hhmm-time-format
// ^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$
// ^([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$

// HH:MM 12-hour format, optional leading 0, mandatory meridiems (AM/PM)
// /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/

// export const regexSchedule = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
// export const regexSchedule = /(0[1-9]|1[0-2]):([0-5][0-9]) ((a|p)m|(A|P)M)/;

export const regexSchedule = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] ((a|p)m|(A|P)M)/;// OK
// export const regexSchedule = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] ((a)m|(A)M)/;// OK
//? MAÑANA
// export const regexSchedule = /(1[0-9]|2[0-3]):[0-5][0-9] ((a)m|(A)M)/;// OK


// export const regexSchedule = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] ((p)m|(P)M)/;// OK
//* TARDE - NOCHE
// export const regexSchedule = /(1[0-9]|2[0-3]):[0-5][0-9] ((p)m|(P)M)/;// OK


// export const regexSchedule = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

// export const regexSchedule = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
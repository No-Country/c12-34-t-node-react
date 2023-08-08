export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const dominiosPermitidos = ['gmail.com', 'hotmail.com', "yahoo.com", "yahoo.es", "outlook.com", "outlook.es"];
export const dominiosPermitidosRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`, 'i');
export const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
export const number = /[0-9]/;

// *                            30min | 40-99min | 100-190min|120        min | 1|2     h
// export const regexDuration = /^(3[0-9]|[4-9][0-9]|1[0-1][0-9]|120)\s*(min)|(1|2)\s*(h)$/;
// *                            30min | 40-99min | 100-190min|120
export const regexDuration = /^(3[0-9]|[4-9][0-9]|1[0-1][0-9]|120)\s*(min)$/;
// export const regexDuration = /^(30|([1-2][0-9]{1,2}))\s*(minutos?|hora?|horas?)$/;

// *                            06-09 | 10-12 : 00 - 59              | 13-19 | 20-22 : 00 - 59 
export const regexSchedule = /^(0[6-9]|1[0-2]):[0-5][0-9] ((a)m|(A)M)|(1[3-9]|2[0-2]):[0][0] ((p)m|(P)M)$/;// OK
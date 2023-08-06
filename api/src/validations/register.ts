import { IAdmin } from "interfaces/IAdmin";

export const validateRegister = (admin: IAdmin): IAdmin => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const dominiosPermitidos = ['gmail.com', 'hotmail.com', "yahoo.com", "yahoo.es", "outlook.com", "outlook.es"];
  const dominiosPermitidosRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`, 'i');
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;
  const number = /[0-9]/

  if (!admin.user || !admin.password || !admin.email) {
    throw new Error("Todos los campos son requeridos")
  }

  if (admin.user.match(number)) {
    throw new Error("Debes colocar un nombre valido")
  }

  if (admin.user.length < 3) {
    // return res.status(400).json({ message: "Debes colocar un nombre mayor a 3 caracteres" })
    throw new Error("Debes colocar un nombre mayor a 3 caracteres")
  }

  if (!admin.email) {
    // return res.status(400).json({ message: 'Debe ingresar un correo' });
    throw new Error('Debe ingresar un correo')
  }

  if (!emailRegex.test(admin.email) || !dominiosPermitidosRegex.test(admin.email)) {
    // return res.status(400).json({ message: 'El correo electrónico no es válido' });
    throw new Error('El correo electrónico no es válido')
  }

  if (!regexPassword.test(admin.password)) {
    // return res.status(400).json({
    //   message: 'La contraseña debe contener al menos 8 caracteres incluyendo: mayúsculas, minúsculas, números y caracteres especiales ( @, $, !, %, *, ?, _ , - o &.)'
    // });
    throw new Error('La contraseña debe contener al menos 8 caracteres incluyendo: mayúsculas, minúsculas, números y caracteres especiales ( @, $, !, %, *, ?, _ , - o &.)')
  }

  if (admin.password !== admin.confirmPassword) {
    throw new Error("El password no coincide")
  }

  return admin;
}
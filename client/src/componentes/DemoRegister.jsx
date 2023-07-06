import gmail from "../img/gmail.png";
import axios from 'axios';
import { useState } from 'react';

const DemoRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {

    const userData = {
      name: name,
      password: password,
      email: email,
    };
    axios
      .post("http://localhost:3001/api/auth", userData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

  };
  return (
    <div className="w-300">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-lg bg-gray-200 p-4  w-[50vh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {" "}
            Registrarse{" "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Usuario *{" "}
              </label>
            </div>

            <div className="mt-2">
              <input onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                placeholder="usuario"
                type="text"
                required
                className="block w-full rounded-lg border-0 py-1.5 bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Email*{" "}
              </label>
            </div>

            <div className="mt-2">
              <input onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                placeholder="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Contraseña*{" "}
              </label>
            </div>

            <div className="mt-2">
              <input onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                placeholder="contraseña"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Repetir Contraseña*{" "}
              </label>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                placeholder="contraseña"
                type="password"
                required
                className="block w-full rounded-md border-0  bg-black py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="checkbox" />
          </label>

          <div>
            <button
              onClick={register}
              type="submit"
              className="flex w-full justify-center rounded-md bg-amber-400  px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Aceptar
            </button>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md px-3 border-black py-1.5 text-sm font-semibold leading-6 text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <img
                src={gmail}
                style={{ height: "3vh", marginRight: "2vh" }}
              ></img>
              Sign up With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoRegister;

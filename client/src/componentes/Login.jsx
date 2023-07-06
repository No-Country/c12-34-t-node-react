import axios from "axios";
import { useState } from 'react';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const logUser = () => {
    const userData = {
      name: name,
      password: password,
    };


    axios
      .post("http://localhost:3001/api/login", userData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-lg bg-gray-200 p-4 w-[50vh]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicio de sesion
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
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
              <input
                id="email"
                name="email"
                placeholder="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md  py-1.5  bg-black  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Email o Contraseña *
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                placeholder="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-rounded py-1.5  bg-black  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="checkbox" />
          </label>

          <div>
            <button
              onClick={() => logUser()}
              className="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Aceptar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          No estas registrado?{" "}
          <a href="#" className="font-semibold leading-6 text-lime-600">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

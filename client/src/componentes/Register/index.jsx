import gmail from '../Register/gmail.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Section from '../Section';
import { CgAsterisk } from 'react-icons/cg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swAlert from "@sweetalert/with-react";
const { VITE_BACKEND_URL } = import.meta.env

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();

    const userData = {
      user: name,
      password: password,
      email: email,
    };

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   { if (userData.user === '' || userData.password === '') {
      toast.error('Los campos no pueden estar vacíos');
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      toast.error('El e-mail no es válido');
      return;
    } }



    axios.post(`${VITE_BACKEND_URL}/api/auth`, userData)
      .then(res => {
        localStorage.setItem('user', userData.user);
        swAlert(<h2> {name},  Te has registrado correctamente</h2>);
        navigate('/login');
        console.log(res.data);
      })
      .catch(err => {
        swAlert(<h2>{err.response.data.msg}</h2>);
        console.log(err);
      });
  };

  let token = sessionStorage.getItem('userToken')
  
    useEffect(() => {
      token && navigate('/home') 
    }, [token, navigate])

    const callBack = async (e) => {
      e.preventDefault();
      window.location.href = `${VITE_BACKEND_URL}/google`
    }

  return (
    <>
      <ToastContainer />
      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', height:'calc(100vh - 72px)' }}>

          <Link to="/">
            <svg style={{ marginLeft: '65px' }} width="120" height="120" viewBox="0 0 484 476" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M303 248.174C303 352.46 235.171 437 151.5 437C67.8288 437 0 352.46 0 248.174C0 143.888 67.8294 343.394 151.501 343.394C235.172 343.394 303 143.888 303 248.174Z" fill="#F9D51C" />
              <path d="M53 230.4C53 342.466 217.821 230.4 108.745 230.4C168.473 27.4862 272 436.243 272 324.177C272 212.11 -0.329771 0 108.745 0C217.821 0 53 118.334 53 230.4Z" fill="#343A40" />
            </svg>
          </Link>
          <div className="w-300">
            <div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }} className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8 rounded-lg bg-gray-200 p-4  w-[50vh]">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className=" text-center text-2xl font-bold leading-7 tracking-tight text-gray-900">
                  {" "}
                  Registrarse{" "}
                </h2>
              </div>
              <form action="#" onSubmit={register}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="mt-9 sm:mx-auto sm:w-full sm:max-w-sm">
                <div>
                  <div className="flex items-center">
                    <label style={{ textAlign: 'center' }}
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Usuario
                    </label>
                    <CgAsterisk color='black' />
                  </div>

                  <div className="mt-2">
                    <input style={{ padding: '5px' }} onChange={(e) => setName(e.target.value)}
                      id="user"
                      name="user"
                      placeholder="Usuario"
                      type="text"
                      required
                      className="block w-full rounded-lg border-0 py-1.5 bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <CgAsterisk color='black' />
                  </div>

                  <div className="mt-2">
                    <input style={{ padding: '5px' }} onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contraseña
                    </label>
                    <CgAsterisk color='black' />
                  </div>

                  <div className="mt-2">
                    <input style={{ padding: '5px' }} onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      placeholder="Contraseña"
                      type="password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div style={{ gap: '1px', color: 'red' }} className="flex items-center">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Repetir Contraseña
                    </label>
                    <CgAsterisk color='black' />
                  </div>

                  <div className="mt-2">
                    <input
                      style={{ padding: '5px' }}
                      id="password"
                      name="password"
                      placeholder="Repetir Contraseña"
                      type="password"
                      required
                      className="block w-full rounded-md border-0  bg-black py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <label className="label cursor-pointer">
                  <span className="label-text">Recuérdame</span>
                  <input style={{ border: '1px solid' }} type="checkbox" className="checkbox" />
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
                    onClick={callBack}
                    className="flex w-full justify-center rounded-md px-3 border-black py-1.5 text-sm font-semibold leading-6 text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <img
                      src={gmail}
                      style={{ height: "3vh", marginRight: "2vh" }}
                    ></img>
                    Inicia sesión con Google
                  </button>
                  <p className="mt-5 text-center text-sm text-gray-500">
                    Ya estás registrado?
                  <Link Link to="/login" className="font-semibold leading-6 text-lime-600" style={{ padding: '5px'}}>Iniciar sesión</Link>
                  </p>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Register;
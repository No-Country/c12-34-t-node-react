import axios from "axios";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Section from "../Section";
import { CgAsterisk } from 'react-icons/cg';
import Header from "../Header";
import 'react-toastify/dist/ReactToastify.css';
import swAlert from "@sweetalert/with-react";
import { useContext } from "react";
import { UserContext } from "../../store/userContext";

const Login = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [notName, setNotName] = useState(false);
  const [userTok, setuserTok] = useState("")
  const [nameOfUser, setNameOfUser] = useState("")

  const userCtx = useContext(UserContext)

  const logUser = (e) => {
    e.preventDefault();
    const userData = {
      email: name,
      password: password
    };

    const userName = localStorage.getItem('user');

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, userData)
      .then((res) => {
        console.log(res.data)
        console.log(res.data.data.user.user)
        console.log(res.data.data.user.email)
        console.log(res.data.data.token)
        
         userCtx.updateUser(res.data.data.user.id)
         userCtx.updateUserNameRegistered(res.data.data.user.user)
         userCtx.updateUserEmailRegistered(res.data.data.user.email)
         userCtx.updateUserTokenRegistered(res.data.data.token)
      

    
        swAlert(<h2> Bienvenido {userName} </h2>);
        setTimeout(() => { 
          navigate(`/admin/${userCtx.userId}`);
        }, 500)
       
        if (name.length === 0) {
          setNotName(true);
        }
      })
      .catch(err => {
        console.log(err);
        swAlert(<h2>{err.response.data.msg}</h2>);
        navigate('/register');
        console.log(err.response.data.msg)
      });
  };
 
  
   
 

      


  return (
    <>

      <Section>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <Link to="/">
            <svg style={{ marginLeft: '65px' }} width="120" height="120" viewBox="0 0 484 476" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M303 248.174C303 352.46 235.171 437 151.5 437C67.8288 437 0 352.46 0 248.174C0 143.888 67.8294 343.394 151.501 343.394C235.172 343.394 303 143.888 303 248.174Z" fill="#F9D51C" />
              <path d="M53 230.4C53 342.466 217.821 230.4 108.745 230.4C168.473 27.4862 272 436.243 272 324.177C272 212.11 -0.329771 0 108.745 0C217.821 0 53 118.334 53 230.4Z" fill="#343A40" />
            </svg>
          </Link>
          <div className="w-300">
            <div style={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }} className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 rounded-lg bg-gray-200 p-4 w-[50vh]">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm " >
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">Inicio de sesión</h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>

                    <div className="flex items-center align-middle">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-black"> Email </label>
                      <CgAsterisk color='black' />
                    </div>
           
 

                    <div className="mt-2">
                      <input style={{ padding: '5px' }} id="email" name="email" placeholder='Email' type="email" autoComplete="email" required onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md  py-1.5  bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  {!!notName && <p>Debes introducir el nombre</p>}

                  <div>
                    <div className="flex items-center">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">Contraseña</label>
                      <CgAsterisk color='black' />

                    </div>
                    <div className="mt-2">
                      <input style={{ padding: '5px' }} id="password" name="password" placeholder='Contraseña' type="password" autoComplete="current-password" required onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-rounded py-1.5  bg-black  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>


                  <label className="label cursor-pointer">
                    <span className="label-text">Recuérdame</span>
                    <input style={{ border: '1px solid' }} type="checkbox" className="checkbox" />
                  </label>


                  <div>
                    <button
                      onClick={logUser}
                      className="flex w-full justify-center rounded-md bg-amber-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Aceptar
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  No estás registrado?
                  <Link to="/register" className="font-semibold leading-6 text-lime-600" style={{ padding: '10px' }} >Crear cuenta</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </Section>
    </>
  );
};

export default Login;

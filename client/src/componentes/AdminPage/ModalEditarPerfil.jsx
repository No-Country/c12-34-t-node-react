import { useState } from 'react'
import profesor from "../../img/profesor.jpg"
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from '../../store/userContext';

const ModalEditarPerfil = () => {

    const [name, setName] = useState("")
    const [cargo, setCargo] = useState("")
    const [email, setEmail] = useState("")
  
    const userCtx = useContext(UserContext)

    console.log(userCtx.userId)
   
    const editProfile = () => { 
        const dataUpdated  = ({ 
            name,
            cargo,
            email
        })
        axios.put(`/api/update-user/${userCtx.userId}`, dataUpdated)
             .then((res) => { 
                console.log(res.data.user)
                userCtx.updateUserEmailRegistered(res.data.user.email)
                userCtx.updateUserNameRegistered(res.data.user.name)
                userCtx.updateUserCargoRegistered(res.data.user.cargo)
              
             })
             .catch((err) => { 
                console.log(err)
             })
    }

  return (
    <div>
      <button
        className="btn btn-active btn-warning mt-4 px-10"
        onClick={() => window.my_modal_3.showModal()}
      >
        Editar Perfil
      </button>

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box bg-gradient-to-b from-[#B0BAC3] to-gray-100">
          <div className="flex flex-col">
            <div  >
              <h3 className=" text-center font-[Poppins] font-bold">
                Editar Perfil
              </h3>
            </div>

            <div className="bg-white rounded-xl mt-2 ">
              <div className=" mt-4 md:mt-0 flex flex-col md:flex-row md:items-center  mx-[1rem]">

                <div className="flex flex-col md:mt-0 md:ml-8">
                  <p className="text-[15px]">
                    <b>Nombre Completo*</b>
                  </p>
                  <input
                    type="text"
                    className="bg-slate-300 rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <p className="text-[15px] mt-5">
                    <b>Email*</b>
                  </p>
                  <input
                    type="text"
                    className="bg-slate-300 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className="md:ml-5 md:mt-10 mb-4 md:mb-10">
                  <p className="text-[15px] mt-5">
                    <b>Imagen*</b>
                  </p>
                  <div className="avatar mt-2">
                    <div className="w-24 rounded-full">
                      <img src={profesor} alt="Imagen de perfil" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex mt-8 justify-center">
              <button
                className="hover:bg-[#FFFFFF] hover:text-[#1A1363] font-[Poppins] font-semibold px-14 py-4 text-white btn btn-active bg-[#1A1363] rounded-xxl w-[70px] mr-4 "
                onClick={() => editProfile()}
              >
                Guardar
              </button>
              <button className="hover:bg-[#FFFFFF] hover:text-[#1A1363] font-[Poppins] font-semibold px-14 py-4 text-white btn btn-active bg-[#1A1363] rounded-xxl w-[70px] mr-4 ">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default ModalEditarPerfil

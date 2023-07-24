import React, { useEffect, useState } from 'react'
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
       <button className="btn btn-active btn-warning mt-[4rem] px-10" onClick={()=>window.my_modal_3.showModal()}>Editar Perfil</button>
                <dialog id="my_modal_3" className="modal">
                   <form method="dialog" className="modal-box bg-slate-400">
                   <div >
                        <div>
                            <h3 className="font-bold text-lg text-center"><b>Editar Perfil</b> </h3>
                         </div>

                         <div className='bg-white rounded-xl'>
                             <div className='flex mt-[15px]'>
                                <div className='mt-[10px] ml-[20px]'>
                                    <p className='text-[15px]'><b>Nombre Completo*</b></p>
                                    <input type='text' className='bg-slate-300 rounded-lg' onChange={(e) => setName(e.target.value)}></input>
                                       <p className='text-[15px] mt-[20px]' ><b>Email*</b></p>
                                       <input type='text' className='bg-slate-300 rounded-lg'  onChange={(e) => setEmail(e.target.value)}></input>
                                </div>

                                <div className='ml-[50px] mt-[10px]'>
                                <div className='mt-[10px] ml-[20px]'>
                                    <p className='text-[15px]' ><b>Cargo*</b></p>
                                    <input type='text' className='bg-slate-300 rounded-lg' onChange={(e) => setCargo(e.target.value)}></input>
                                       <p className='text-[15px] mt-[20px]'><b>Imagen*</b></p>
                                       <div className="avatar mt-[5px]">
                                              <div className="w-24 rounded-full">
                                                 <img src={profesor} />
                                              </div>
                                       </div>
                                </div>
                                </div>
                                
                            </div>

                            <div className='flex m-[50px] ml-[110px]'>
                                
                                <div>
                                <button className='text-white btn btn-active btn-primary rounded-xxl w-[70px]' onClick={() => editProfile()}>Guardar</button>
                                </div>

                                <div className='ml-[90px] mb-[15px]'>
                                    <button className='text-white btn btn-active btn-primary rounded-xxl w-[70px]'>Cancelar</button>
                                </div>
                                
                            </div>
                                </div>
                   </div>
                   </form>
                </dialog>
    </div>
  )
}

export default ModalEditarPerfil

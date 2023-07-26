import React, { useState } from "react";
import { useEffect } from "react";
const { VITE_BACKEND_URL } = import.meta.env;
import axios from "axios";


const ModalClientes = ({reset}) => {

    const [name, setName] = useState("")
    const [plan, setPlan] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [dateIn, setDateIn] = useState("")
    const [dateOut, setDateOut] = useState("")

    
  const createNewClient = () => {
    
     const newUserToBeSaved = ({  
        name: name,
        plan: plan,
        contact: contact,
        email: email,
        dateIn: dateIn,
        dateOut: dateOut
      })

    axios.post(`${VITE_BACKEND_URL}/api/client`, newUserToBeSaved)
         .then((res) => {
          console.log(res.data);
          reset(newUserToBeSaved)
      })
      .catch(err => {
        console.log(err)
      });
  };





  return (
    <div className='text-black'>
    <button className="btn btn-active btn-primary mb-5" onClick={() => window.my_modal_5.showModal()}>Agregar</button>
    <dialog id="my_modal_5" className="modal  sm:modal-middle mx-auto">
      <form method="dialog" className="modal-box bg-slate-400">
        <div className='px-4 py-6'>
  
          <div className='text-center'>
            <h3 className="font-bold text-lg">Agregar Cliente</h3>
          </div>
  
          <div className='bg-white rounded-xl mt-4 p-4'>
            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Nombre</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setName(e.target.value)}></input>
            </div>
  
            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Plan</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setPlan(e.target.value)}></input>
            </div>
            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Contacto</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setContact(e.target.value)}></input>
            </div>


            <div className='mb-4'>
              <p className='text-base font-semibold'><b>Email</b></p>
              <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className='mb-4'>
                <div className='flex'>
                   <p className='text-base font-semibold'><b>Fecha de Ingreso</b></p>
                   <input type='date' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setDateIn(e.target.value)}></input>

                   <p className='text-base font-semibold'><b>Fecha de Vencimiento</b></p>
                   <input type='date' className='w-full bg-slate-300 rounded-lg py-2 px-3' onChange={(e) => setDateOut(e.target.value)}></input>
                </div>
         
            </div>
  
            <div className='flex justify-center'>
              <button className='text-white btn btn-active btn-primary rounded-xxl w-[100px] mr-4' onClick={() => createNewClient()}>Agregar</button>
              <button className='text-white btn btn-active btn-primary rounded-xxl w-[100px]'>Cancelar</button>
            </div>
          </div>
        </div>
      </form>
    </dialog>
  </div>
  )
}

export default ModalClientes

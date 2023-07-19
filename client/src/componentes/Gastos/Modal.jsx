import React from 'react'

const ModalGastos = ({title}) => {
  return (
    <div>
         <button className="btn btn-active btn-primary" onClick={()=>window.my_modal_5.showModal()}>Agregar</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
           <form method="dialog" className="modal-box bg-slate-400">
            <div >
                <div>
                  <h3 className="font-bold text-lg"><b>{title}</b>  </h3>
                </div>

                  <div className='bg-white rounded-xl'>
                   <div className='flex mt-[15px]'>
                
                <div className='mt-[10px] ml-[20px]'>
                     <p className='text-[15px]'><b>Nombre</b></p>
                     <input type='text' className='bg-slate-300 rounded-lg'></input>
                </div>

                <div className='ml-[50px] mt-[10px]'>
                     <p><b>Importe</b></p>
                     <input type='text' className='bg-slate-300 rounded-lg'></input>
                </div>
                
              </div>

              <div className='flex m-[50px] ml-[110px]'>
                
                <div>
                <button className='text-white btn btn-active btn-primary rounded-xxl w-[70px]'>Agregar</button>
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

export default ModalGastos
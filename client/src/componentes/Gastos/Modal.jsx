import React from 'react'

const ModalGastos = ({ title }) => {
  return (
    <div className='text-black'>
      <button className="btn btn-md px-10 py-1.5 mx-auto rounded-xl flex justify-center text-sm shadow-sm font-PoppinsSemibold bg-pallete-yellow hover:bg-pallete-yellow  leading-6 text-pallete-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pallete-blue" onClick={() => window.my_modal_5.showModal()}>Agregar</button>
      <dialog id="my_modal_5" className="modal  sm:modal-middle mx-auto">
        <form method="dialog" className="modal-box bg-slate-400">
          <div className='px-4 py-6'>

            <div className='text-center'>
              <h3 className="font-bold text-lg"><b>{title}</b></h3>
            </div>

            <div className='bg-white rounded-xl mt-4 p-4'>
              <div className='mb-4'>
                <p className='text-base font-semibold'><b>Nombre</b></p>
                <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3'></input>
              </div>

              <div className='mb-4'>
                <p className='text-base font-semibold'><b>Importe</b></p>
                <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3'></input>
              </div>

              <div className='flex justify-center'>
                <button className='text-white btn btn-active btn-primary rounded-xxl w-[100px] mr-4'>Agregar</button>
                <button className='text-white btn btn-active btn-primary rounded-xxl w-[100px]'>Cancelar</button>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  )
}

export default ModalGastos

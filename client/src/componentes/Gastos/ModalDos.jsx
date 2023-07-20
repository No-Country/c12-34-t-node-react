import React from 'react'

const ModalDos = () => {
  return (
    <div className='text-black'>
  <button className="btn btn-active btn-primary mb-5" onClick={() => window.my_modal_3.showModal()}>Agregar</button>
  <dialog id="my_modal_3" className="modal mx-auto">
    <form method="dialog" className="modal-box bg-slate-400">
      <div className='px-4 py-6'>

        <div className='text-center'>
          <h3 className="font-bold text-lg"><b>Agregar Ingresos Mensuales</b></h3>
        </div>

        <div className='bg-white rounded-xl mt-4 p-4'>
          <div className='mb-4'>
            <p className='text-base font-semibold'><b>Nombre</b></p>
            <input type='text' className='w-full bg-slate-300 rounded-lg py-2 px-3'></input>
          </div>

          <div className='mb-4'>
            <p className='text-base font-semibold'><b>Fecha</b></p>
            <input type='date' className='w-full bg-slate-300 rounded-lg py-2 px-3'></input>
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

export default ModalDos

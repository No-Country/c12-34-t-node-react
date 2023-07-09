import React from 'react'
import logo from "../../img/logo.png"
import profesor from "../../img/profesor.jpg"

const AdminPage = () => {
  return (
    <div>
         <div   > {/*className='flex justify-center'*/}
              <div className='flex justify-center'>
                <img src={logo} alt="" />
              </div>
               <br />
              <div className='position-left'>
                <h5 > <b>Perfil Administrador</b></h5>
              </div>
          </div>
        <hr style={{width:"20vh"}}/>

        <div className='flex'>
           
            <div>
            <button className="btn btn-warning mt-3">Mi Cuenta</button>
              <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                <div className="avatar">
                    <div className="w-[30vh] rounded-full">
                        <img src={profesor} />
                   </div>
                 </div>
                <div className='ml-10'>
                   <div>
                      <label htmlFor=""> <b>Nombre y Apellido</b></label>
                      <p>Juan Rodriguez</p>
                   </div>

                   <div>
                      <label htmlFor=""> <b>Correo</b></label>
                      <p>juanrodriguez@gmail.com</p>
                   </div>

                   <div>
                      <label htmlFor=""> <b>Cargo</b></label>
                      <p>Administrador</p>
                   </div>
                  <button className="btn btn-warning mt-3">Editar Perfil</button>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPage

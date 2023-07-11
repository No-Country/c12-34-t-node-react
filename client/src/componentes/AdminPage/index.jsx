import React from 'react'
import logo from "../../img/logo.png"
import profesor from "../../img/profesor.jpg"
import Sidebar from '../../pages/Home/Components/Sidebar'

const AdminPage = () => {
  return (
    <div>

      <div className='flex'>
          <div>
              <Sidebar/>
          </div>

        <div>
              <div > 
                  <div className='flex justify-center'>
                     <img src={logo} alt="" className="w-[20vh] xxxl:ml-[550px] xxl:ml-[140px] xl:ml-[100px] lg:ml-[170px] sm:ml-[200px]   xxxs:mt-[100px] sm:mt-[80px] xxs:mt-[80px] lg:mt-[40px] xl:mt-[20px]"/>
                  </div>
                   <br />
                   <div className='position-left'>
                      <h5 className='ml-[5vh]'> Perfil Administrador</h5>
                   </div>
               </div>
                    <hr style={{width:"20vh"}}/>

      
           
            <div>
            <button className="btn btn-warning mt-5 ml-[5vh]">Mi Cuenta</button>
              <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row xxxl:ml-[380px] xxl:ml-[45vh] xl:mb-[1000px]  xl:ml-[300px] lg:mb-[700px] lg:ml-[300px] md:mb-[1000px] md:ml-[250px] sm:mb-[1000vh] sm:ml-[250px] xxs:mb-[800px] xxs:ml-[200px]">
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
    
       
    </div>
  )
}

export default AdminPage

import React, { useEffect } from 'react'
import logo from "../../img/logo.png"
import profesor from "../../img/profesor.jpg"
import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../../store/userContext";

const AdminPage = () => {

   
  const getUsers = () => { 
     axios.get("http://localhost:3001/api/all-users")
          .then((res) => { 
            console.log(res.data)
          })
          .catch((err) => { 
            console.log(err)
          })
  }

  const userCtx = useContext(UserContext)

  useEffect(() => { 
    setTimeout(() => { 
  console.log( "EL ID DEL CONTEXTO FUE SETEADO A" +   userCtx.userId)
  console.log( "EL NOMBRE DEL CONTEXTO FUE SETEADO A" + userCtx.userNameRegistered)
  console.log( "EL EMAIL DEL CONTEXTO FUE SETEADO A" +userCtx.userEmailRegistered)
  console.log( "EL TOKEN DEL CONTEXTO FUE SETEADO A" + userCtx.userTokenRegistered)
    }, 2500)
  }, [userCtx.length])


     


  
  const userName = localStorage.getItem('user');

  return (
    <div>

      <div className='flex'>


        <div>
              <div > 
                  <div className='flex justify-center'>
                     <img src={logo} alt="" className="w-[20vh] xxxl:ml-[550px] xxl:ml-[140px] xl:ml-[100px] lg:ml-[170px] sm:ml-[200px]   xxxs:mt-[100px] sm:mt-[80px] xxs:mt-[80px] lg:mt-[40px] xl:mt-[20px]"/>
                  </div>
                   <br />
                   <div className='position-left'>
                      <h5 className='ml-[5vh] '> Perfil Administrador</h5>
                   </div>
               </div>
                    <hr style={{width:"20vh"}}/>

      
           
            <div>
            <button className="btn btn-warning mt-5 ml-[5vh] xxxs:text-[10px] xxxs:w-[100px] xxxs:mb-[80px]">Mi Cuenta</button>
              <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row xxxl:ml-[480px] xxl:ml-[45vh] xl:mb-[1000px]  xl:ml-[300px] lg:mb-[700px] lg:ml-[300px] md:mb-[1000px] md:ml-[150px] sm:mb-[1000vh] sm:ml-[250px] xxs:mb-[800px] xxs:ml-[200px] xxxs:mb-[500px] xxxs:ml-[50px]">
                <div className="avatar md:position-relative bottom-[10vh] ">
                    <div className="w-[30vh] rounded-full">
                        <img src={profesor} />
                   </div>
                 </div>
                <div className='ml-10 '>
                   <div>
                      <label htmlFor=""> <b>Nombre y Apellido</b></label>
                      <p>{userCtx.userNameRegistered}</p>
                   </div>

                   <div>
                      <label htmlFor=""> <b>Correo</b></label>
                      <p>{userCtx.userEmailRegistered}</p>
                   </div>

                   <div>
                      <label htmlFor=""> <b>Cargo</b></label>
                      <p>Administrador </p>
                   </div>
                  <button className="btn btn-warning mt-3" onClick={() => getUsers()}>Editar Perfil</button>
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

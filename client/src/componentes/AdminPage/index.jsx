
import axios from "axios"
import { useEffect, useContext } from 'react'
import { UserContext } from "../../store/userContext"
import Title from '../Title'
import profesor from "../../img/profesor.jpg"
import ModalEditarPerfil from "./ModalEditarPerfil"

const AdminPage = () => {

  const getUsers = () => {
    axios.get(`/api/all-users`)
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
      console.log("EL ID DEL CONTEXTO FUE SETEADO A" + userCtx.userId)
      console.log("EL NOMBRE DEL CONTEXTO FUE SETEADO A" + userCtx.userNameRegistered)
      console.log("EL EMAIL DEL CONTEXTO FUE SETEADO A" + userCtx.userEmailRegistered)
      console.log("EL TOKEN DEL CONTEXTO FUE SETEADO A" + userCtx.userTokenRegistered)
    }, 2500)
  }, [userCtx.length])



  return (
    <div className='flex w-full'>
    
      <main className='flex flex-col w-full gap-2 m-5 mt-10 '>

         <div>
         <Title  title={'Perfil administrador'} />
         </div>

        <section className='flex flex-col'>


          <div className=" w-full h-auto flex flex-col md:flex-row gap-7 hero-content mt-10 2xl:ml-[10rem]">
            <span className="avatar">
              <div className="md:w-[min(500px,40vw)] rounded-full">
                <img src={profesor} />
              </div>
            </span>

            <div className='ml-10 text-xl text-black md:ml-[8rem] '>

              <div className="mb-2">
                <label htmlFor=""> <b>Nombre y Apellidos</b></label>
                <p className="font-[Poppins] font-[400] ">{userCtx.userNameRegistered}</p>
              </div>

              <div className="mb-2">
                <label htmlFor=""> <b>Correo</b></label>
                <p className="font-[Poppins] font-[400] ">{userCtx.userEmailRegistered}</p>
              </div>

            
              <ModalEditarPerfil/>

            </div>

          </div>

        </section>

      </main>

    </div >
  )
}

export default AdminPage


import axios from "axios"
import React, { useEffect, useContext } from 'react'
import { UserContext } from "../../store/userContext"
import Sidebar from '../../pages/Home/Components/Sidebar'
import Title from '../Title'
import profesor from "../../img/profesor.jpg"
import ModalEditarPerfil from "./ModalEditarPerfil"
const { VITE_BACKEND_URL } = import.meta.env

const AdminPage = () => {

  const getUsers = () => {
    axios.get(`${VITE_BACKEND_URL}/api/all-users`)
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
    <div className='flex'>
      <Sidebar />
      <main className='flex flex-col w-full gap-2 m-5'>
        <Title title={'Perfil administrador'} />
        <section className='flex flex-col'>
          <button className="btn btn-warning self-start px-5 py-4 mt-4 ">Mi Cuenta</button>
          <div className=" self-center flex gap-7 hero-content">
            <span className="avatar">
              <div className="w-[min(300px,20vw)] rounded-full">
                <img src={profesor} />
              </div>
            </span>
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
                <p>{userCtx.userCargoRegistered}</p>
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
// button xxxs:text-[10px] xxxs:w-[100px] xxxs:mb-[80px]
// lg:flex-row xxxl:ml-[480px] xxl:ml-[45vh] xl:mb-[1000px]  xl:ml-[300px] lg:mb-[700px] lg:ml-[300px] md:mb-[1000px] md:ml-[150px] sm:mb-[1000vh] sm:ml-[250px] xxs:mb-[800px] xxs:ml-[200px] xxxs:mb-[500px] xxxs:ml-[50px]
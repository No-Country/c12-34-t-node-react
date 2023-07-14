import axios from "axios"
import Sidebar from '../../pages/Home/Components/Sidebar'
import Title from '../Title'
import profesor from "../../img/profesor.jpg"

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
              <button className="btn btn-warning mt-3" onClick={() => getUsers()}>Editar Perfil</button>
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
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { TableV1, Bienes,BienesMaquinas } from '../../componentes/index'
import Sidebar from './Components/Sidebar'
import Horarios from './Components/Horarios'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import AdminPage from '../../componentes/AdminPage'
import GroupClasses from '../../componentes/GroupClasses'


const HomePrincipal = () => {
  
  const navigate = useNavigate();
  
  let token = sessionStorage.getItem('userToken')

  useEffect(() => {
    !token && navigate('/') 
  }, [token, navigate])

  return (
<>
    {token === null 
    ? <Navigate to='/' />
    :
    <>
      <div className='flex'>


        <div>
          <Sidebar />
        </div>


        <Routes>

          <Route path='/admin' element={<AdminPage />} />
          <Route path='/bienes' element={<Bienes />} />
          <Route path='/bienes/maquinas' element={<BienesMaquinas/>} />
          <Route path='/bienes/elementos' element={<h1>pag elementos</h1>} />
          <Route path='/bienes/mobiliario' element={<h1>pag mobiliario</h1>} />
          <Route path='/staff' element={<h1 className='m-auto'>acá iria el componente staff</h1>} />
          <Route path='/clientes' element={<TableV1 />} />
          <Route path='/proovedores' element={<h1>acá iria el componente proovedores</h1>} />
          <Route path='/horarios' element={<Horarios />} />
          <Route path='/reservas' element={<GroupClasses />} />
          <Route path='/gastos' element={<h1>acá iria el componente gastos</h1>} />

        </Routes>

      </div>

      <Footer />
    </>
    }
    </>

  )
}

export default HomePrincipal
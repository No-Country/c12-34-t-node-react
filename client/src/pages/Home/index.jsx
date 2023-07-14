import { Route, Routes } from 'react-router-dom'

import { TableV1, Bienes, BienesMaquinas, AdminPage } from '../../componentes/index'
import Sidebar from './Components/Sidebar'
import Horarios from './Components/Horarios'
import Footer from './Components/Footer'

const HomePrincipal = () => {
  // FIX: la ruta "/admin" esta ocupada en App.jsx ¿Qué hacemos con esta?
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path='/admin' element={<>Verificar esta ruta</>} />
          <Route path='/bienes' element={<Bienes />} />
          <Route path='/bienes/maquinas' element={<BienesMaquinas />} />
          <Route path='/bienes/elementos' element={<h1>pag elementos</h1>} />
          <Route path='/bienes/mobiliario' element={<h1>pag mobiliario</h1>} />
          <Route path='/staff' element={<h1 className='m-auto'>acá iría el componente staff</h1>} />
          <Route path='/clientes' element={<TableV1 />} />
          <Route path='/proveedores' element={<h1>acá iría el componente proveedores</h1>} />
          <Route path='/horarios' element={<Horarios />} />
          <Route path='/reservas' element={<h1>acá iría el componente reservas</h1>} />
          <Route path='/gastos' element={<h1>acá iría el componente gastos</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default HomePrincipal
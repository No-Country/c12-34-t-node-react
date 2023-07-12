import { Route, Routes } from 'react-router-dom'

import { TableV1, Bienes } from '../../componentes/index'
import Sidebar from './Components/Sidebar'

const HomePrincipal = () => {

  return (

    <>
      <div className='flex'>


        <div>
          <Sidebar />
        </div>


        <Routes>

          <Route path='/admin' element={<h1>acá iria el componente admin</h1>} />
          <Route path='/bienes' element={<Bienes />} />
          <Route path='/staff' element={<h1 className='m-auto'>acá iria el componente staff</h1>} />
          <Route path='/clientes' element={<TableV1 />} />
          <Route path='/proovedores' element={<h1>acá iria el componente proovedores</h1>} />
          <Route path='/horarios' element={<h1>acá iria el componente horarios</h1>} />
          <Route path='/reservas' element={<h1>acá iria el componente reservas</h1>} />
          <Route path='/gastos' element={<h1>acá iria el componente gastos</h1>} />

        </Routes>

      </div>

    </>

  )
}

export default HomePrincipal
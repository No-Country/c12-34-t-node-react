import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import {
  Bienes,
  BienesElementos,
  BienesMaquinas,
  BienesMobiliario,
  SectionClients,
  SectionProvider,
  SectionStaff,
} from "../../componentes/index";


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
      <div className="flex bg-[#F4F7FF]">
     
        <div>
          <Sidebar />
        </div>
     
      <Routes>

          <Route path='/admin' element={<AdminPage />} />
          <Route path='/bienes' element={<Bienes />} />
          <Route path='/bienes/maquinas' element={<BienesMaquinas/>} />
          <Route path='/bienes/elementos' element={<BienesElementos/>} />
          <Route path='/bienes/mobiliario' element={<BienesMobiliario/>} />
          <Route path="/staff" element={<SectionStaff />} />
          <Route path="/clientes" element={<SectionClients />} />
          <Route path="/proovedores" element={<SectionProvider />} />
          <Route path='/horarios' element={<Horarios />} />
          <Route path='/reservas' element={<GroupClasses />} />
          <Route path='/gastos' element={<h1>acá iria el componente gastos</h1>} />

        </Routes>
      </div>

      <Footer />

    </>
  }
    </>
  );
};

export default HomePrincipal;

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import {
  Bienes,
  BienesMaquinas,
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
import Gastos from '../../componentes/Gastos';


const HomePrincipal = () => {
  
  const navigate = useNavigate();
  
  //let token = sessionStorage.getItem('userToken')

  /*useEffect(() => {
    !token && navigate('/') 
  }, [token, navigate])
*/
  return (
<>
    {/*{token === "" 
    ? <Navigate to='/' />
    : */ }
    <>
      <div className="flex bg-[#F4F7FF]">
     
        <div>
          <Sidebar />
        </div>
     
      <Routes>

          <Route path='/admin' element={<AdminPage />} />
          <Route path='/bienes' element={<Bienes />} />
          <Route path='/bienes/maquinas' element={<BienesMaquinas/>} />
          <Route path='/bienes/elementos' element={<h1>pag elementos</h1>} />
          <Route path='/bienes/mobiliario' element={<h1>pag mobiliario</h1>} />
          <Route path="/staff" element={<SectionStaff />} />
          <Route path="/clientes" element={<SectionClients />} />
          <Route path="/proovedores" element={<SectionProvider />} />
          <Route path='/horarios' element={<Horarios />} />
          <Route path='/reservas' element={<GroupClasses />} />
          <Route path='/gastos' element={<Gastos />} />

          

        </Routes>
      </div>

      <Footer />

    </>
    
    </>
  );
};

export default HomePrincipal;

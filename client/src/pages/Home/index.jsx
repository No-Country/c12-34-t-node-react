import { Route, Routes } from 'react-router-dom'


const HomePrincipal = () => {

  return (

    <div style={{
      border: '1px solid',
      backgroundColor: 'white',
      color: 'black',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      gap:'80px',
      width:'100%',
      maxWidth:'2400px'
    }}>

 

  {/* acá se agrega el sidebar */}
 
    <Routes>
      <Route path='/dashboard' element={<h1>acá iria el componente home</h1>} />
      <Route path='/admin' element={<h1>acá iria el componente admin</h1>} />
      <Route path='/bienes' element={<h1>acá iria el componente bienes</h1>} />
      <Route path='/staff' element={<h1>acá iria el componente staff</h1>} />
      <Route path='/clientes' element={<h1>acá iria el componente clientes</h1>} />
      <Route path='/proovedores' element={<h1>acá iria el componente proovedores</h1>} />
      <Route path='/horarios' element={<h1>acá iria el componente horarios</h1>} />
      <Route path='/reservas' element={<h1>acá iria el componente reservas</h1>} />
      <Route path='/gastos' element={<h1>acá iria el componente gastos</h1>} />

    </Routes>
    
    
   
    </div>
  )
}

export default HomePrincipal
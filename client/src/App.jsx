import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { Login, Register } from './componentes'
import { Home } from './componentes/home_principal/Home'


function App() {

  return (
    
    <Routes>
      <Route exact path='/landing' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path="/home" element={<Home />} />
     </Routes>
  )
}

export default App;

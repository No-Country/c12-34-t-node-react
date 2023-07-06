import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { Login, Register } from './componentes'
import { Toaster, toast } from 'sonner'


function App() {

  return (
    <Routes>
      <Route exact path='/landing' element={<Landing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

     </Routes>
  )
}

export default App

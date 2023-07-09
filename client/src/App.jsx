import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { Footer, Header, Login, Register } from './componentes'
import { Home } from './componentes/home_principal/Home'
import AdminPage from './componentes/AdminPage'


function App() {

  return (
    <>
      <Header />

      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 70,
      }}>
      
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      </div>
      
      <Footer />
    </>

  )
}

export default App;

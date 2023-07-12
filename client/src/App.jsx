import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { Header, Login, Register } from './componentes'
import HomePrincipal from './pages/Home/index'
import NotFound from './pages/NotFound'



function App() {

  // const {pathname} = useLocation()
  // const isAdminPage = pathname.includes('admin')

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
        <Route path="/admin/*" element={<HomePrincipal/>} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      
      {/* {!isAdminPage &&

      <Footer />
      } */}
    </>

  )
}

export default App;

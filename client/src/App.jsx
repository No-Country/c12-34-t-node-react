import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { HeaderV2, Login, Register } from './componentes'
import HomePrincipal from './pages/Home/index'


import NotFound from './pages/NotFound'
import { UserProvider } from './store/userContext'
import AdminPage from './componentes/AdminPage'




function App() {

  // const {pathname} = useLocation()
  // const isAdminPage = pathname.includes('admin')

  return (
    <>

      <HeaderV2 />
    
    <UserProvider>

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
          <Route path="/home/*" element={<HomePrincipal />} />
            


          <Route path="/admin/:id" element={<AdminPage />} />

          {/* <Route path='*' element={<NotFound />} /> */}


        </Routes>
      </div>

      {/* {!isAdminPage &&

      <Footer />
      } */}
       </UserProvider>
    </>

  )
}

export default App

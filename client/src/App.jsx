import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import { Header, Login, Register } from './componentes'
import HomePrincipal from './pages/Home/index'
import GroupClasses from './componentes/GroupClasses'

import AdminPage from './componentes/AdminPage'

import NotFound from './pages/NotFound'
import { UserProvider } from './store/userContext'




function App() {

  // const {pathname} = useLocation()
  // const isAdminPage = pathname.includes('admin')

  return (
    <>
    <UserProvider>

   
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
          <Route path="/admin*" element={<HomePrincipal />} />

          <Route path="/admin/:id" element={<AdminPage />} />

          <Route path='*' element={<NotFound />} />

          <Route path="/admin/reservas" element={<GroupClasses/>}></Route>

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

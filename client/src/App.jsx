import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componentes/Login'
import Register from './componentes/Register'
import './index.css'
import Navbar from './componentes/Navbar'

function App() {
  

  return (
    <>
      <div> 
      
        <Navbar/>
       <br />
       <br />
       <br />

    
           <Login/>
           <br />
           <Register />
    
     
      </div>

      </>
  )
}

export default App

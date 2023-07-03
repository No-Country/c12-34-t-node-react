import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componentes/Login'
import './index.css'
import Navbar from './componentes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
      
        <Navbar/>
        <Login/>
      </div>

      </>
  )
}

export default App

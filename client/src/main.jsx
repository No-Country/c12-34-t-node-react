import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_CLIENT_ID } from './config/constants.js'
import Session from './providers/session.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>


    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>

    <BrowserRouter>
      <Session.Provider>
        <App />
      </Session.Provider>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
)


// import { environment } from "@config/environment"
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"
import { createContext, useContext, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import swAlert from "@sweetalert/with-react";

const context = createContext({})
context.displayName = 'SessionContext'


const Provider = ({ children }) => {



  const [secret, setSecret] = useState(
    () => localStorage.getItem('secret')
  )

  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem('user'))
  )

  const signOut = () => {
    setSecret(null)
    setUser(null)
    localStorage.removeItem('secret')
    localStorage.removeItem('user')
  }

  
  const signIn = useGoogleLogin({ 
    scope: 'profile email',
    flow: 'auth-code',
    onSuccess: ({ code }) => {
      console.log({ code })
      
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/google`, {code} )
        .then(res => {
          const { secret, ...user } = res.data
          localStorage.setItem('secret', secret)
          localStorage.setItem('user', JSON.stringify(user))
          setSecret(secret)
          setUser(user)
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    }
  })

  const value = {
    // isLogging,
    // isLoggedIn,
    // secret,
    // loginExternal: handleLoginExternal,
    // loginError: loginError || loginExtError,
    signIn,
    signOut,
    user,
    secret
  }

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}


export const useSession = () => useContext(context)


export default {
  Provider,
  Context: context,
}
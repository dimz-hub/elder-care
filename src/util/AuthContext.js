import React, {createContext, useContext, useEffect,useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'


const AuthContext = createContext()





export function AuthContextProvider ({children}) {

function createUser (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

const [currentUser,setCurrentUser] = useState(null)
const [loading,setLoading] = useState(true)
useEffect(() => {
const unsub = onAuthStateChanged(auth, (user) => {
  
  setCurrentUser(user)
  setLoading(false)
 
      });

      return () => {
        unsub()
      }
      
}, [])




return (

    <AuthContext.Provider value={{createUser, currentUser}}>
           { !loading && children}
    </AuthContext.Provider>
        )


}

export const useAuthContext = () => useContext(AuthContext)
import React from 'react'
import {Navigate} from 'react-router-dom' 
import { useAuthContext } from '../util/AuthContext'

export default function PrivateRoute({children}) {

    const {currentUser} = useAuthContext()
   
     if(!currentUser) {
      return <Navigate to='/' replace />
     }else{
      return children
     }


}

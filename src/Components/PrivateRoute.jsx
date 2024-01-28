import React from 'react'
import { useNavigate, Navigate, Route } from 'react-router-dom' 
import { useAuthContext } from '../util/AuthContext'

export default function PrivateRoute({children}) {

    
    const {currentUser} = useAuthContext()
     if(!currentUser) {
      return <Navigate to={'/signin'} replace />
     }else{
      return children
     }


}

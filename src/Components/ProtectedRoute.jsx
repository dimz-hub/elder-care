import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../util/AuthContext'

export default function ProtectedRoute({children}) {

    const {currentUser} = useAuthContext()
   

    if (!currentUser) {
        return <Navigate to ='/' replace />
    }
  return children
}

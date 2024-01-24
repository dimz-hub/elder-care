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


    // const navigate = useNavigate()

    // if (currentUser == null) {
    //   setTimeout(() =>{

    //       navigate('/')
    //   }, 1000)
    // }

    // return children

    // return (
    //     <Route
    //     {...rest}
    //     render ={props => {
    //       return currentUser? <Component {...props} /> : <Navigate to={'/'} />
    //     }}
    //     >

    //     </Route>
    // )



}

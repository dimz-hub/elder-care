import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../util/firebase';
import {  setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
  
  
    const navigate = useNavigate()
  
  
    
    async function handleSubmit(e) {
      e.preventDefault()
      try{

        //  await setPersistence(auth, browserSessionPersistence);

        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        
        navigate('/admin')

      } catch(err) {
        setError(true)
        console.log(err.message)
  
      }  
  }
  
  
    return (
      <div className=' h-[100vh] w-[100vw]  flex items-center justify-center'>
  
      <div className='signup flex flex-col items-center rounded-[20px] h-[70vh] w-[50%] bg-[#294B29] pt-[40px] gap-[px] xs:w-[100%] xs:h-[100%] xs:rounded-none  xs:pt-[75px] md:w-[70%] '>
        
         <h1 className='mb-[10px] font-bold text-2xl text-[white]'>
          BIRCH CARE
         </h1>
  
         <h2 className='font-[500] text-xl xs:mb-[40px] text-[white]'>SignIn</h2>
         <p className='text-[white] font-[500] text-[22px]'>For admin use only </p>
         <form onSubmit={ (e) =>handleSubmit(e)}  className='flex flex-col items-center justify-center gap-[30px] mt-[10px] '>
          <span className = ' xs:mb-[20px]'>
          <input type='email' id='email' className=' signup-input rounded-[10px] text-[black]  h-[40px] w-[300px]' placeholder='email' onChange={(e) => setEmail(e.target.value)}  required/>
          </span>
        <span className = ' xs:mb-[20px]'>
          <input type='password'id='password' className=' signup-input rounded-[10px] text-[black]  h-[40px] w-[300px]' placeholder='password' onChange={(e) => setPassword(e.target.value)} required/>
        </span>
         <button className=' hero-button p-3 outline-none bg-[black] text-[white]  w-[12rem] rounded-[10px] mt-[15px] font-[600] '>SignIn</button>
        
         </form>
          {error && <span>Something went wrong</span>}
         </div>
      </div>
    )
}

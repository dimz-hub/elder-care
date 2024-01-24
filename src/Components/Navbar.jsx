import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

const [scrolled, setScrolled] = useState(false)



useEffect(() => {

  function onScroll() {
    if(window.scrollY > 60 && !scrolled) {
      setScrolled(true)
    }else if(window.scrollY <= 60 && scrolled){
      setScrolled(false)
    }

  }
 
    window.addEventListener('scroll' , onScroll)
    
    return ()=> {
      window.removeEventListener('scroll' , onScroll)
      
    }

    
  },[scrolled])

  







  return (
   

    <div  className={` flex items-center justify-between m-[auto] p-[25px]   ${scrolled ?  'w-[100vw] m-[0px] navbar-black  text-[white]' : ' text-[white] w-[100vw] m-[auto]'  }`}>
  <div className = 'text-[45px] font-[500] cursor-default'> <Link to={'/'}>

    Birch
  </Link>
    </div>
  <div className = {`${ scrolled? 'navlinks-scrolled mr-[25px]' :  'navlinks-fixed'} font-[400] text-[22px] flex items-center gap-[10px]`}>
    <Link to={'/'}>
  <span>Home</span>
    </Link>
    <Link to={'/about'}>

  <span>About</span>
    </Link>
    <Link to={'/services'}>

  <span>Services</span>
    </Link>
    <Link to={'/enquiry'}>

  <span>Enquiry</span>
    </Link>
    <Link to={'/contact'}>

  <span>Contact Us</span>
    </Link>
    <Link to={'/signin'}>
  <span>Admin</span>

    </Link>
  </div>
    </div>
   
  )
}

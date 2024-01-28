import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

const [scrolled, setScrolled] = useState(false)
const [toggle, setToggle] = useState(false)


function showNav() {

  setToggle(!toggle)
}




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

  


console.log(toggle)




  return (
   

    <div  className={` flex items-center justify-between m-[auto] p-[25px]  xs:p-[5px] xs:block ${scrolled ?  'w-[100vw] m-[0px] navbar-black  text-[white]' : ' text-[white] w-[100vw] m-[auto]'  }`}>
  <div className = 'text-[45px] font-[500] cursor-default xs:flex xs:justify-between xs:items-center xs:p-[10px]'> 
  <div>

  <Link to={'/'}>

    Birch
  </Link>
  </div>
  <div>
    <img src='images/toggle.png' alt='toggle' className='xs:w-[40px] w-[50px] hidden xs:block' onClick={showNav} />
  </div>
    </div>
    <div className = {`${ scrolled? 'navlinks-scrolled mr-[25px]  xs:mr-[0px]' :  'navlinks-fixed'} font-[400] text-[22px] flex items-center xs:pt-[30px] xs:gap-[10px] xs:gap-[30px] xs:flex-col xs:z-30  xs:w-[100vw] xs:h-[88vh] xs:items-center xs:absolute xs:right-0 xs:overflow-hidden ${toggle?'xs:h-[75vh] xs:bg-[#789461] transition duration-500 ease-in-out' : 'xs:h-[0px] xs:bg-[transparent]' }`}>
    <Link to={'/'}>
  <span className='xs:p-[50px]' >Home</span>
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

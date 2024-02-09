import React, {useState} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function TopPage({scrolled, topRef}) {

const  [loaded, setLoaded] = useState(false)
  
 function handleImageLoad () {
  setLoaded(true)
 }

  return (
    <div  className='toppage'>

    <div className={`hero h-[100vh] w-[100vw] ${loaded? 'loaded' : ''}  `}>
      <img 
      onLoad={handleImageLoad}
      src='images/elder-sunset.jpg'
      style={{display:'none'}}
      />
      <div className='content hero-container xs:z-20'>

        <div  className='fixed top-0 left-0 navbar-main xs:absolute'>

        <Navbar scrolled = {scrolled}  />
        </div>
       <Hero topRef ={topRef} />
      </div>
    </div>
    </div>
  )
}

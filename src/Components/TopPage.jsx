import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function TopPage({scrolled, topRef}) {


  
  return (
    <div  className='toppage'>

    <div className='hero h-[100vh] w-[100vw]'>
      <div className='hero-container xs:z-20'>
        <div  className='fixed top-0 left-0 navbar-main xs:absolute'>

        <Navbar scrolled = {scrolled}  />
        </div>
       <Hero topRef ={topRef} />
      </div>
    </div>
    </div>
  )
}

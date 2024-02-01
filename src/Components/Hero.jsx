import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({topRef}) {
  return (
    <div className= ' hero-body w-[90vw] m-[auto] p-[25px] mt-[60px] h-[50vh] xs:w-[100%] xs:h-[100vh] xs:items-center xs:flex  xs:justify-center xs:mt-[0px] xs:pt-[40px]' >
      <div className='w-[45vw] xs:w-[100%] xs:flex xs:flex-col xs:justify-center lg:w-[85vw] lg:m-[auto] lg:mt-[30px]' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}> 
      

      <h2 className='text-[44px] font-[600] text-[white] xs:text-[32px] xs:w-[100%] xs:mt-[20px]  lg:text-[35px] '>
        Welcome to Birch, an assisted living collective where your care is the reason we are here.
      </h2>
      <p className='text-[white] font-[400] text-[20px] mt-[25px] xs:text-[15px] xs:mt-[15px] '>
        Get accessible and personalised in-person assisted living <br />so you experience life's great moments with loved ones <br /> no matter your disability or challenging behaviour.
      </p>
     
 <Link to={'/enquiry'} className='xs:w-[90vw] xs:flex xs:justify-center xs:pt-[5px] lg:mt-[25px]'>
      <button className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[150px] w-[12rem] rounded-[10px] mt-[15px] font-[600] xs:ml-[0px]  xs:flex xs:justify-center  '>
        Enquiry
      </button>
 </Link>
      </div>
    </div>
  )
}

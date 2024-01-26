import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({topRef}) {
  return (
    <div className= ' hero-body w-[90vw] m-[auto] p-[25px] mt-[60px] h-[50vh]' >
      <div className='w-[45vw] ' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}> 
      

      <h2 className='text-[44px] font-[600] text-[white] '>
        Welcome to Birch, an assisted living collective where your care is the reason we are here.
      </h2>
      <p className='text-[white] font-[400] text-[20px] mt-[25px]'>
        Get accessible and personalised in-person assisted living <br />so you experience life's great moments with loved ones <br /> no matter your disability or challenging behaviour.
      </p>
     
 <Link to={'/enquiry'}>
      <button className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[150px] w-[12rem] rounded-[10px] mt-[15px] font-[600] '>
        Enquiry
      </button>
 </Link>
      </div>
    </div>
  )
}

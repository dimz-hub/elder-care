import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({topRef}) {
  return (
    <div className= ' hero-body w-[90vw] m-[auto] p-[25px] mt-[60px] h-[50vh] xs:w-[100%] xs:h-[100vh] xs:items-center xs:flex  xs:justify-center xs:mt-[0px] xs:pt-[40px]' >
      <div className='w-[45vw] xs:w-[100%] xs:flex xs:flex-col xs:justify-center lg:w-[85vw] lg:m-[auto] lg:mt-[30px]' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}> 
      

      <h2 className='text-[35px] font-[700] text-[white] xs:text-[30px] xs:w-[100%] xs:mt-[20px]  lg:text-[35px] '>
        Welcome to Birch, a domiciliary and  supported living collective where your care is the reason we are here.
      </h2>
      <p className='text-[white] text-[15px] font-[400] text-[20px] mt-[10px] xs:text-[15px] xs:mt-[15px] '>
        Birch Social Limited is a specialist provider of high quality flexible person-centred support. 
Through both supported living and domiciliary care services, Birch Social Limited supports 
service users to live as independently as their abilities allow.
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

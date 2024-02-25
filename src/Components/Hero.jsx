import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({topRef}) {
  return (
    <div className= ' hero-body w-[90vw] m-[auto] p-[25px] mt-[60px] h-[50vh] xs:w-[100%] xs:h-[100vh] xs:items-center xs:flex  xs:justify-center xs:mt-[0px] xs:pt-[40px]' >
      <div className='w-[45vw] xs:w-[100%] xs:flex xs:flex-col xs:justify-center lg:w-[85vw] lg:m-[auto] lg:mt-[30px]' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}> 
      

      <h2 className='text-[23px] mt-[10px] font-[700] text-[white] xs:text-[20px]  xs:w-[100%] xs:mt-[20px]  lg:text-[22px] '>
      Welcome to Birch social limited  regulated by care quality commission. A Domiciliary,  supported Living and live in care provider providing care for people with Dementia,  mental health, 
       challenging behaviour, Autism and learning disabilities for people of 18 to 65+ in own home (Home care)  Supported Living accommodation.
      </h2>
      <p className='text-[white]  text-[15px]  xs:text-left font-[400] text-[20px] mt-[10px] xs:text-[15px] xs:mt-[15px] '>
        Birch Social Limited is a specialist provider of high quality flexible person-centred support. 
        Through supported Living, domiciliary care and live in care, Birch Social Limited supports 
service users to live as independently as their abilities allow.
      </p>
     
 <Link to={'/enquiry'} className='xs:w-[90vw] xs:flex xs:justify-center xs:pt-[5px] lg:mt-[25px] m-[auto] w-[90vw]'>
       <div className='w-full flex justify-center'>

      <button className=' hero-button p-3 outline-none bg-[black] text-[white]  w-[12rem] rounded-[10px] mt-[15px] font-[600] xs:ml-[0px]  xs:flex xs:justify-center  '>
        Enquiry
      </button>
       </div>
 </Link>
      </div>
    </div>
  )
}

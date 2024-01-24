import React from 'react'

export default function Savehaven({saveRef}) {
  return (
    <div className='mission w-[100vw] h-[100vh]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px] safehaven' >
     <div className= 'flex  justify-between gap-[20px]'>
   
        <div className=''>
            

        <img src='images/safehaven1.jpg' alt='safe haven'  className = ' image w-[40vw] h-[76vh] section-image  rounded-[20px]  hover:w-[43vw] hover:h-[78vh] '/>
     
            </div>
            <div className='w-[49%] h-[70vh] mt-[30px] text-center'>
            <h1 className='text-[45px] font-[800] text-[#88c4fc] mb-[25px]'>
                Providing you with a safe haven 🏡
            </h1>
            <p className='text-[22px] text-justify' >
            In the journey of aging, finding a place of comfort, security, and care becomes paramount. Quality of life should not
            be limited by disability. You deserve to feel comfortable, connected and secure no matter your disability. Our assisted living provides a beacon of hope and through safe haven 
            for elderly client through thoughtful design, personalized services, and a nurturing environment.

            </p>
        </div>
        </div>
    </div>
     </div>
  )
}

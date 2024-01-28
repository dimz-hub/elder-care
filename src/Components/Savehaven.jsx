import React from 'react'

export default function Savehaven({saveRef}) {
  return (
    <div className='mission w-[100vw] h-[100vh] xs:h-[auto]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px] safehaven xs:mt-[-40px]' ref={saveRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }} >
     <div className= 'flex  justify-between gap-[20px] xs:flex-col-reverse'>
   
        <div className=''>
            

        <img src='images/old1.jpg' alt='safe haven'  className = ' image w-[40vw] h-[76vh] section-image  rounded-[20px]  hover:w-[43vw] hover:h-[78vh] mt-[60px] object-cover xs:w-[400px] xs:h-[300px] xs:hover:w-[400px] xs:hover:h-[300px] xs:mt-[10px]' />
     
            </div>
            <div className='w-[49%] h-[70vh] mt-[30px] text-center xs:w-[100%] xs:h-[auto]'>
            <h1 className='text-[45px] font-[800] text-[white] mb-[25px] xs:text-[38px]'>
                Providing you with a safe haven 🏡
            </h1>
            <p className='text-[22px] text-justify text-[white] xs:text-[18px]' >
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

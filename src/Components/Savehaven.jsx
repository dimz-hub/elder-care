import React from 'react'

export default function Savehaven({saveRef}) {
  return (
    <div className='w-[100vw] h-[100vh] xs:h-[auto]  md:h-[auto]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px] safehaven xs:mt-[-40px]' ref={saveRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }} >
     <div className= 'flex  justify-between gap-[20px] xs:flex-col-reverse md:flex-col-reverse  md:gap-[40px]'>
   
        <div className='md:w-[85vw]  md:h-[auto]  md:flex md:justify-center xs:m-[auto] xs:w-[100%]  md:mt-[-120px]'>
            

        <img src='images/old1.jpg' alt='safe haven'  className = ' image w-[40vw] h-[76vh] section-image  rounded-[20px]   mt-[60px] object-cover xs:w-[400px] xs:h-[300px]  xs:mt-[10px]  md:w-[500px] md:h-[400px]   ' />
     
            </div>
            <div className='w-[49%] h-[70vh] mt-[30px] text-center xs:w-[100%] xs:h-[auto]  md:w-[100%]'>
            <h1 className='text-[45px] font-[800] text-[#4F6F52] mb-[25px] xs:text-[38px]'>
                Providing you with a safe haven 🏡
            </h1>
            <p className='text-[22px] text-justify xs:text-left xs:text-[18px] lg:text-[18px]' >
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

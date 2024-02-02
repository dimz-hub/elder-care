import React from 'react'

export default function Clientreview({clientRef}) {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#DCF2F1] xs:relative client-review  xs:pb-[70px] xs:min-h-[100vh] xs:h-[100%] md:min-h-[100vh] md:h-[100%] lg:min-h-[100vh] lg:h-[100%]'>
        <div className='client-review-container xs:absolute xs:bg-black xs:bg-opacity-10 xs:top-0 xs:left-0  ' ref={clientRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>

        <div className='w-[90vw] m-[auto] flex items-center justify-center flex-col text-[white]  pt-[20px]  '>
            <h1 className='text-[65px] font-[800] md:mb-[10px]  mb-[25px] xs:text-[46px] xs:text-center md:text-[50px] md:text-center lg:text-[55px] lg:text-center' >Hear what others are saying</h1>
            <p className='text-[42px] text-center w-[90%] font-[600] md:mt-[20px]  mt-[40px] xs:text-justify xs:text-[18px] md:text-[25px] lg:text-[30px]'>"Birch helped quickly provide phenomenal advice on care, which gave my family peace of mind where my aunt needed support. We're planning to move into their facility"</p>
            <p className='text-[30px] mt-[50px] xs:text-center md:text-[20px]'>  -<span className='font-[600] '>SUZANNE</span>,Client's Family</p>
        </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Stayhome({homeRef}) {
  return (
    <div className='mission h-[100vh] w-[100vw] xs:h-[auto] xs:mt-[-40px] md:h-[auto]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px]' ref={homeRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
    <div className= 'flex items-center justify-between gap-[20px] xs:flex-col xs:gap-[120px] md:flex-col md:gap-[40px]'>
       <div className='w-[53%] h-[70vh] mt-[30px] text-center xs:w-[100%] md:w-[100%]'>
           <h1 className='text-[45px] font-[800] text-[white] mb-[25px] xs:text-[38px]'>
               Stay in a home that is full of love 
           </h1>
           <p className='text-[22px] text-justify text-[white] xs:text-[18px]  lg:text-[18px]' >
           As adults with disabilities, it can be challenging to do things that bring you
           joy but with out assisted living that will be a challenge of the past. Our assited living cater to your needs which includes cooking meals you 
           love and crave for, staying socially connected, enjoying your hobbies , getting where you need to go, just basically getting the full experience out of life

           </p>
       </div>
       <div className='md:mt-[-90px]'>
           

       <img src='images/fulllove4.jpg' alt='home of love'  className = ' image w-[35vw] h-[73vh] object-cover  section-image rounded-[20px] mt-[30px] hover:w-[37vw] hover:h-[75vh] xs:w-[400px] xs:h-[300px]   xs:hover:w-[400px] xs:hover:h-[299px]  xs:mb-[100px] md:w-[500px] md:h-[400px] md:hover:w-[500px] xs:hover:h-[400px]'/>
    
           </div>
    
       </div>
    </div>
    </div>
  )
}

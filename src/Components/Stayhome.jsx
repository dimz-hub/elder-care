import React from 'react'

export default function Stayhome({homeRef}) {
  return (
    <div className='mission h-[100vh] w-[100vw]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px]' ref={homeRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
    <div className= 'flex items-center justify-between gap-[20px]'>
       <div className='w-[53%] h-[70vh] mt-[30px] text-center'>
           <h1 className='text-[45px] font-[800] text-[#88c4fc] mb-[25px]'>
               Stay in a home that is full of love 
           </h1>
           <p className='text-[22px] text-justify ' >
           As adults with disabilities, it can be challenging to do things that bring you
           joy but with out assisted living that will be a challenge of the past. Our assited living cater to your needs which includes cooking meals you 
           love and crave for, staying socially connected, enjoying your hobbies , getting where you need to go, just basically getting the full experience out of life

           </p>
       </div>
       <div>
           

       <img src='images/fulllove4.jpg' alt='home of love'  className = ' image w-[35vw] h-[73vh] object-cover  section-image rounded-[20px] mt-[30px] hover:w-[37vw] hover:h-[75vh]'/>
    
           </div>
    
       </div>
    </div>
    </div>
  )
}

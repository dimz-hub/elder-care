import React from 'react'

export default function Team( {teamRef}) {
  return (
    <div className= 'w-[100vw] h-[100vh] bg-[#294B29]' >
        <div className='w-[90vw] m-[auto] flex flex-col items-center p-[50px] gap-[40px]' ref={teamRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
          <h1 className='text-[white] text-[45px] font-[600]'>Meet Out Team</h1>
          <div className='flex items-center justify-center gap-[30px] ' >
            <div className='bg-[white] w-[25vw] h-[60vh] p-3 rounded-[20px] flex flex-col items-center justify-center gap-[10px]'>
              <div className='h-[250px] w-[250px] mt-[15px]'>

                <img  src='images/tiffany.jpg' alt='Tiffany Gulumba' className='rounded-[20px] object-cover h-[220px] w-[280px]'/> 
              </div>
              <div className='text-center'>

                <p  className=' font-[600] text-[23px] '>Tiffany Gulumba</p>
                <p  className=' font-[600] text-[23px]'> 
                    Registered Manager
                </p>
                {/* <p  className=' font-[600] text-[23px]'>07597936369</p> */}
                {/* <p  className=' font-[600] text-[23px]'>Tiffany@joinbirch.org</p> */}
              </div>
            </div>
            <div className='bg-[white] w-[25vw] h-[60vh] p-3 rounded-[20px] flex flex-col items-center justify-center gap-[10px]'>
              <div className='h-[250px] w-[250px] mt-[15px] '>

                <img  src='images/sade.jpg' alt='sade dada' className='rounded-[20px]  object-cover h-[220px] w-[280px]'/>
              </div>
              <div className='text-center'>

                <p className=' font-[600] text-[23px]'>Sade Dada</p>
                <p className=' font-[600] text-[23px]'>
                    Operation Manager
                </p >
                {/* <p className=' font-[600] text-[23px]'>07724537007</p>
                <p className=' font-[600] text-[23px]'>Sade@joinbirch.org</p> */}
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
 
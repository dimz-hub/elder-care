import React, {useEffect} from 'react'


export default function Mission({missionRef}) {



  return (
    <div className=' w-[100vw] [h-100vh]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px] mt-[-120px] ' ref={missionRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }} >
     <div className= ' flex justify-between items-center gap-[50px]  xs:flex-col xs:gap-[20px] xs:justify-center  md:flex-col md:justify-center md:gap-[-40px] '>
        <div className='w-[53%] h-[70vh] mt-[30px] text-center xs:w-[100%] xs:mt-[70px] md:w-[100%] md:mt-[70px]'>
            <h1 className='text-[45px] font-[800] text-[#4F6F52] mb-[25px] xs:text-[38px]'>
                Our Mission
            </h1>
            <p className='text-[22px] text-justify xs:text-left xs:text-[18px]  lg:text-[18px]  ' >
            Birch Social Limited aims to provide adults with complex needs the ability to live a life of their
own choosing in their own homes. This is achieved by providing essential skills, physical and
emotional support and a range of services that enable our service users to build their 
independence safely. Birch Social Limited’s priority is to ensure our services safeguard and promote the health, 
welfare and quality of life of our service users; whilst also supporting them to reach their full 
potential. We don’t believe in a one size fits all approach, so our focus is to cater to our 
service users' individual needs in a manner that respects their preferences whilst upholding 
their rights and dignity.

            </p>
        </div>
        <div className='md:mt-[-35px] mt-[200px] xs:mt-[185px] '>
            

        <img src='images/elder-sunset.jpg' alt='elder watching sunset'  className = ' image w-[35vw] h-[73vh] object-cover section-image rounded-[20px]   xs:w-[400px] xs:h-[300px]      md:w-[500px] md:h-[400px]  '/>
     
            </div>
     
        </div>
     </div>
    </div>

  )
}

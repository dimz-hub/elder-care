import React, {useEffect} from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Aos from 'aos'

export default function Mission({missionRef}) {

    // useEffect(() => {
    //       Aos.init({duration:3000, delay:1000})
    // },[])

  return (
    <div className='mission w-[100vw] [h-100vh]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px] mt-[-120px] ' ref={missionRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }} >
     <div className= ' flex justify-between items-center gap-[50px]  xs:flex-col xs:gap-[20px] xs:justify-center  md:flex-col md:justify-center md:gap-[-40px] '>
        <div className='w-[53%] h-[70vh] mt-[30px] text-center xs:w-[100%] xs:mt-[70px] md:w-[100%] md:mt-[70px]'>
            <h1 className='text-[45px] font-[800] text-[white] mb-[25px] xs:text-[38px]'>
                Our Mission
            </h1>
            <p className='text-[22px] text-justify text-[white] xs:text-[18px]  lg:text-[18px]  ' >
            At Birch, we are committed  to providing compassionate and comprehensive care, ensuring the well-being, dignity, and 
            comfort of our elderly clients. We are committed to creating a nurturing and supportive environment that fosters a sense of community, 
            belonging, and purpose.Our dedicated team of caregivers, medical professionals, and support staff is driven by the belief that every
             individual deserves the highest quality of life in their golden years. We strive to enhance the physical, emotional, and social aspects 
             of our residents' lives, promoting independence and preserving their unique identities.

            </p>
        </div>
        <div className='md:mt-[-35px] mt-[200px] xs:mt-[130px] '>
            

        <img src='images/elder-sunset.jpg' alt='elder watching sunset'  className = ' image w-[35vw] h-[73vh] object-cover section-image rounded-[20px]  hover:w-[37vw] hover:h-[75vh] mt-[]  xs:w-[400px] xs:h-[300px] xs:hover:w-[400px] xs:hover:h-[300px]     md:w-[500px] md:h-[400px] md:hover:w-[500px] md:hover:h-[400px] '/>
     
            </div>
     
        </div>
     </div>
    </div>

  )
}

import React, {useEffect} from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Aos from 'aos'

export default function Mission({missionRef}) {

    useEffect(() => {
          Aos.init({duration:3000, delay:1000})
    },[])

  return (
    <div className='mission w-[100vw] [h-100vh]'>

    <div className='w-[90vw] p-[25px] m-[auto] pt-[80px] mt-[-120px] ' >
     <div className= ' flex justify-between items-center gap-[20px]'>
        <div className='w-[53%] h-[70vh] mt-[30px] text-center'>
            <h1 className='text-[45px] font-[800] text-[#88c4fc] mb-[25px]'>
                Our Mission
            </h1>
            <p className='text-[22px] text-justify ' >
            At Birch, we are committed  to providing compassionate and comprehensive care, ensuring the well-being, dignity, and 
            comfort of our elderly clients. We are committed to creating a nurturing and supportive environment that fosters a sense of community, 
            belonging, and purpose.Our dedicated team of caregivers, medical professionals, and support staff is driven by the belief that every
             individual deserves the highest quality of life in their golden years. We strive to enhance the physical, emotional, and social aspects 
             of our residents' lives, promoting independence and preserving their unique identities.

            </p>
        </div>
        <div>
            

        <img src='images/elder-sunset.jpg' alt='elder watching sunset'  className = ' image w-[35vw] h-[73vh] object-cover section-image rounded-[20px]  hover:w-[37vw] hover:h-[75vh] mt-[16rem]'/>
     
            </div>
     
        </div>
     </div>
    </div>

  )
}

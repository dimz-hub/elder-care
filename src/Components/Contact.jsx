import React from 'react'
 import { FaFacebook } from 'react-icons/fa';
 import { FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default function Contact({contactRef}) {

  const redirectToFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=100091480451032 ', '_blank');
  };
  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/company/birch-social-limited/ ', '_blank');
  };


  return (
    <div className='w-[100vw] h-[100vh] mission flex items-center justify-center  xs:min-h-[100vh] xs:h-[auto] md:h-[auto] md:pb-[30px] lg:h-[auto] lg:pb-[30px]' >
        <div className='w-[90v] m-[auto] xs:w-[90vw]    ' ref={contactRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
          <div className='flex items-center justify-center gap-[50px] xs:flex-col  md:flex-col lg:flex-col'>

            <div className='xs:text-center xs:flex xs:flex-col xs:justify-center xs:items-center '>
          <h3 className='font-[600] text-[50px] xs:text-[30px] xs:mb-[30px] text-[#4F6F52]'>Get in touch with us</h3>
          <div className='xs:flex xs:flex-col xs:gap-[10px] xs:pl-[]'>
            <div className='flex   gap-[20px] items-center xs:text-center xs:w-[100vw]  xs:gap-[10px] xs:items-center  xs:flex-col'>
                <div className='font-[500] text-[40px]  xs:text-[25px] xs:font-[600]' >Numbers<span className='xs:hidden'>:</span></div>
                <div className='flex items-center gap-[8px] mt-[10px] xs:mt-[5px] xs:flex-col xs:gap-[5px] '>
 
            <p className='text-[20px]  font-[600] xs:text-[19px] '>07597936369</p>
            <p className='text-[20px]  font-[600] xs:text-[19px]'>07724537007</p>
                </div>
            </div>
            <div className='flex items-center gap-[20px]  xs:flex-col xs:gap-[10px]'>
                <div className='font-[500] text-[40px] xs:text-[25px]  xs:font-[600]'>Emails<span className='xs:hidden' >:</span></div>
                <div className='flex gap-[10px] items-center mt-[10px] xs:gap-[5px] xs:mt-[5px] xs:flex-col'>

            <p className='text-[20px] font-[500] xs:text-[19px]'>Sade@joinbirch.org</p>
            <p className='text-[20px] font-[500] xs:text-[19px]'>Tiffany@joinbirch.org </p>
                </div>
            </div>
            <div className='flex items-center gap-[20px] xs:flex-col xs:gap-[10px]' >
                <div className='font-[500] text-[40px] xs:text-[25px] xs:font-[600]' >Socials<span className='xs:hidden'>:</span></div>
                <div className='flex items-center gap-[10px] jusify-center'>

                  <div onClick={redirectToFacebook} className='cursor-pointer'>
                  
                     <FaFacebook color='' size={50}  className='xs:w-[30px]  xs:h-[30px]'/>
                  </div>
                <div onClick={redirectToLinkedin}>
                       <FaLinkedin  size={50} className='cursor-pointer  xs:w-[30px]  xs:h-[30px]'/> 

                </div>

                   
                 
                    
                </div>
            </div>


          </div>
            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.323703969503!2d-0.08620558822051579!3d51.52562237169987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fcfa5e5%3A0x18b5f6c296424be2!2sOFFICE%2086%2C%2090%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sng!4v1705757569490!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}} allowfullscreen="" className=' xs:w-[350px] xs:h-[350px] xs:rounded-[20px] xs:mb-[20px]' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
            </div>
        </div>
          </div>
    
  )
}

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
    <div className='w-[100vw] h-[100vh] mission flex items-center justify-center ' >
        <div className='w-[90vw] m-[auto]' ref={contactRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
          <div className='flex items-center justify-center gap-[50px]'>

            <div>
          <h3 className='font-[600] text-[50px]'>Get in touch with us</h3>
          <div>
            <div className='flex gap-[20px] items-center'>
                <div className='font-[500] text-[40px] ' >Numbers:</div>
                <div className='flex items-center gap-[10px] mt-[10px]'>
 
            <p className='text-[20px] text-[grey] font-[600]'>07597936369</p>
            <p className='text-[20px] text-[grey] font-[600]'>07724537007</p>
                </div>
            </div>
            <div className='flex items-center gap-[20px]'>
                <div className='font-[500] text-[40px]'   >Emails:</div>
                <div className='flex gap-[10px] items-center mt-[10px]'>

            <p className='text-[20px] font-[500]'>Sade@joinbirch.org</p>
            <p className='text-[20px] font-[500]'>Tiffany@joinbirch.org </p>
                </div>
            </div>
            <div className='flex items-center gap-[20px]'>
                <div className='font-[500] text-[40px]' >Socials:</div>
                <div className='flex items-center gap-[10px] jusify-center'>

                  <div onClick={redirectToFacebook} className='cursor-pointer'>
                  
                     <FaFacebook color='' size={50} />
                  </div>
                <div onClick={redirectToLinkedin}>
                       <FaLinkedin  size={50} className='cursor-pointer'/> 

                </div>

                   
                 
                    
                </div>
            </div>


          </div>
            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.323703969503!2d-0.08620558822051579!3d51.52562237169987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca55fcfa5e5%3A0x18b5f6c296424be2!2sOFFICE%2086%2C%2090%20Paul%20St%2C%20London%20EC2A%204NE%2C%20UK!5e0!3m2!1sen!2sng!4v1705757569490!5m2!1sen!2sng" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
            </div>
        </div>
          </div>
    
  )
}

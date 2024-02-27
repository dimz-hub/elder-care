import React, {useEffect, useRef, useState} from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet'

export default function ContactPage() {

  const [color, setColor] = useState(true)



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useIntersectionObserver = (callback, options = {}) => {
    const targetRef = useRef(null);
 
    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      const targetElement = targetRef.current;
 
      if (targetElement) {
        observer.observe(targetElement);
      }
 
      return () => {
        if (targetElement) {
         observer.unobserve(targetElement);
        }
      };
    }, [callback, options]);
 
    return targetRef;
  };



  const contactRef = useIntersectionObserver((entries) => handleIntersection(entries, 'contact'), { threshold: 0.5 });

const handleIntersection = (entries, section) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
       // Add your animation logic for the specific section here
      const element = entry.target;
        element.style.opacity = 1;
       //  element.classList.add('fadeInAnimation');
     }
    });
  };

  const containerVariant= {
    exit:{
      x:'-100vw',
      transition:{
        ease:'easeInOut'
      }
    }
   }

  return (

    <>
       <Helmet>
      <title>
        Contact Us
      </title>
      <meta name= 'description' content='Get in touch with us to get access to the best services assisted living has to offer'/>
     <link rel= 'canonical' href='/contact' />
    </Helmet>
    <motion.div variants={containerVariant} exit='exit'>
<div className='mission'>
<Navbar color={color}/> 
</div>
<Contact contactRef={ contactRef}  color={color}/>
<Footer/>


    </motion.div>
    </>
  )
}

import React, { useEffect,useRef} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet'


export default function About() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   
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


  const topRef = useIntersectionObserver((entries) => handleIntersection(entries, 'top'), { threshold: 0.2 });
  const modernRef = useIntersectionObserver((entries) => handleIntersection(entries, 'modern'), { threshold: 0.2 });
  const startRef = useIntersectionObserver((entries) => handleIntersection(entries, 'start'), { threshold: 0.2 });
  
  const storyRef = useIntersectionObserver((entries) => handleIntersection(entries, 'store'), { threshold: 0.2 });





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
        About
      </title>
      <meta name= 'description' content='We want you to get the care you deserve'/>
     <link rel= 'canonical' href='/about' />
    </Helmet>




    <motion.div  className='toppage mission' variants ={containerVariant} exit='exit' >

    <div className='about h-[100vh] w-[100vw]'>
      <div className='about-container' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
        <div  className=''>
        <Navbar  />
        </div>
    
    <div className= '  h-[70vh] w-[100vw] flex items-center justify-center text-[white] text-[80px] text-center font-[500] xs:text-[40px] md:text-[60px] lg:text-[60px] '   >
        We want you to get the <br/> care you deserve.
    </div>
        
      </div>
    </div>

    <div className= 'section  p-[25px] flex items-center about-section pt-[100px] xs:flex-col xs:w-[90vw] xs:m-[auto] xs:text-center  gap-[20px]  md:text-center md:h-[auto]  md:mb-[20p]'  >
      <div  ref={storyRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}  className=' flex items-center gap-[35px] w-[90vw] m-[auto]  xs:w-[100%] xs:m-[auto] xs:text-center  xs:flex xs:flex-col  xs:justify-center xs:m-[auto] md:flex-col md:gap-[0px] md:w-[100%]  md:m-[auto] '>

      <div className='section w-[45vw]  xs:w-[90vw] md:w-[85vw] md:m-[auto] md:h-[auto]'>
        <h1 className='text-[42px] text-center text-[#4F6F52]  font-[500] mb-[40px] xs:text-[30px] xs:w-[100%] ' >Transforming assisted living for disabilities and challenging behaviour</h1>
        <p className='text-[26px] text-justify xs:text-[18px] xs:text-left lg:text-[18px]'>
        Sade and Tiffany both have powerful stories of parents and grandparents who have suffered disabilities as adults. Sade's mother found herself disabled in later life and struggling to live independently, 
        and Tiffany’s grandfather and brother had mental health issues in middle age which left them unable to support themselves.
        </p>
        <p className='text-[26px] text-justify xs:text-[18px] xs:text-left lg:text-[18px]'>
        Our story starts with Tiffany and Sade, two passionate care professionals with over fifty years of combined experience providing care. 
        We’re on a mission to improve the state of care for adults with challenging behaviour.
        </p>

      </div>

      <div className='w-[40vw] xs:w-[90vw] xs:mt-[20px] md:w-[85vw]  md:m-[auto]  md:flex md:justify-center lg:mt-[150px]' >
        <img src='images/elderwoman.jpg' alt='transforming assited living' className='rounded-[20px] mt-[150px] xs:w-[465px] xs:h-[300px] xs:mt-[0px] md:mt-[-70px] md:w-[450px] md:h-[430px] lg:h-[350px]' />
      </div>
      </div>

    

    </div>
    <div className='w-[100vw]'>

    <div className='w-[90vw] m-[auto] p-[25px] xs:p-[0px] xs:pb-[50px]  pt-[100px] xs:mt-[35px]' >
       
       <h1 className='text-[42px] text-center  text-[#4F6F52]  font-[500] mb-[40px]  xs:text-[30px]'>A modern approach</h1>

<div className= 'modern  xs:flex xs:flex-col xs:w-[90vw] xs:m-[auto] xs:justify-center  md:flex md:flex-col'  ref={modernRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>

      <div className=''>
        <img src='images/modern3.jpg' alt='transforming assited living' className='rounded-[20px] lg:h-[350px] lg:w-[450px]  ' />
      </div>
      <div className='w-[]'>
        <p className='text-[26px] text-justify  xs:text-left xs:text-[18px] lg:text-[18px]'>
        A modern platform for assisted living in disabilities and challenging behaviour. The Birch Platform combines world-class care, centralised operations, and 
        best-in-class technology to deliver the highest quality care. This combination of human touch and technology helps us provide modern assisted living.
       
        </p>
</div>

    </div>
      </div>

    

    </div>
    <div className='w-[100vw] h-[40vh] bg-[#294B29] flex flex-col items-center justify-center'  ref={startRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }} >
         <h1 className='text-[white] font-[400] text-[45px] xs:text-[30px] xs:text-center md:text-center'>Get started with Birch, today!😄</h1>
          <Link to={'/contact'}>
         <button className=' hero-button p-3 outline-none bg-[black] text-[white]  w-[16rem] rounded-[10px] mt-[15px] font-[600] '>
          Contact Us
          
          </button>
          </Link>
    </div>
    <Footer/>
    </motion.div>
    </>
  )
}

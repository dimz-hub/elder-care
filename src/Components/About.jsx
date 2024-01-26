import React, { useEffect,useRef} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from 'react-router-dom'



export default function About() {

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


  const topRef = useIntersectionObserver((entries) => handleIntersection(entries, 'top'), { threshold: 0.5 });
  const storyRef = useIntersectionObserver((entries) => handleIntersection(entries, 'story'), { threshold: 0.5 });
  const modernRef = useIntersectionObserver((entries) => handleIntersection(entries, 'modern'), { threshold: 0.5 });
  const startRef = useIntersectionObserver((entries) => handleIntersection(entries, 'start'), { threshold: 0.5 });


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




  




  return (
    <div  className='toppage'>

    <div className='about h-[100vh] w-[100vw]'>
      <div className='about-container' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
        <div  className=''>
        <Navbar  />
        </div>
    
    <div className= '  h-[70vh] w-[100vw] flex items-center justify-center text-[white] text-[80px] text-center font-[500] '   >
        We want you to get the <br/> care you deserve.
    </div>
        
      </div>
    </div>

    <div className= 'section  w-[90vw] m-[auto] p-[25px] flex items-center about-section mt-[100px]'  ref={storyRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
      <div className='section'>
        <h1 className='text-[42px] text-center text-[#50623A] font-[500] mb-[40px]' >Transforming assisted living for disabilities and challenging behaviour</h1>
        <p className='text-[26px] text-justify'>
        Sade and Tiffany both have powerful stories of parents and grandparents who have suffered disabilities as adults. Sade's mother found herself disabled in later life and struggling to live independently, 
        and Tiffany’s grandfather and brother had mental health issues in middle age which left them unable to support themselves.
        </p>
        <p className='text-[26px] text-justify'>
        Our story starts with Tiffany and Sade, two passionate care professionals with over fifty years of combined experience providing care. 
        We’re on a mission to improve the state of care for adults with challenging behaviour.
        </p>

      </div>

      <div >
        <img src='images/elderwoman.jpg' alt='transforming assited living' className='rounded-[20px] mt-[150px]' />
      </div>

    

    </div>
    <div className='w-[90vw] m-[auto] p-[25px]  mt-[100px]' >
       
       <h1 className='text-[42px] text-center  text-[#50623A] font-[500] mb-[40px]'>A modern approach</h1>

<div className= 'modern'  ref={modernRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>

      <div>
        <img src='images/modern3.jpg' alt='transforming assited living' className='rounded-[20px] ' />
      </div>
      <div className='w-[]'>
        <p className='text-[26px] text-justify'>
        A modern platform for assisted living in disabilities and challenging behaviour. The Birch Platform combines world-class care, centralised operations, and 
        best-in-class technology to deliver the highest quality care. This combination of human touch and technology helps us provide modern assisted living.
       
        </p>
</div>

      </div>

    

    </div>
    <div className='w-[100vw] h-[40vh] bg-[#294B29] flex flex-col items-center justify-center'  ref={startRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }} >
         <h1 className='text-[white] font-[400] text-[45px]'>Get started with Birch, today!😄</h1>
          <Link to={'/contact'}>
         <button className=' hero-button p-3 outline-none bg-[black] text-[white]  w-[16rem] rounded-[10px] mt-[15px] font-[600] '>
          Contact Us
          
          </button>
          </Link>
    </div>
    <Footer/>
    </div>
  )
}

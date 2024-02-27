import React, {useRef, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet'

export default function ServicePage() {


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
  const servicesRef = useIntersectionObserver((entries) => handleIntersection(entries, 'services'), { threshold: 0.2 });
  const summaryRef = useIntersectionObserver((entries) => handleIntersection(entries, 'summary'), { threshold: 0.2 });
  const clientRef = useIntersectionObserver((entries) => handleIntersection(entries, 'client'), { threshold: 0.2 });
  const serveRef = useIntersectionObserver((entries) => handleIntersection(entries, 'serve'), { threshold: 0.2 });
  const col1Ref = useIntersectionObserver((entries) => handleIntersection(entries, 'col1'), { threshold: 0.2 });
  const col2Ref = useIntersectionObserver((entries) => handleIntersection(entries, 'col2'), { threshold: 0.2 });
  const col3Ref = useIntersectionObserver((entries) => handleIntersection(entries, 'col3'), { threshold: 0.2 });
  const col4Ref = useIntersectionObserver((entries) => handleIntersection(entries, 'col4'), { threshold: 0.2 });
  const col5Ref = useIntersectionObserver((entries) => handleIntersection(entries, 'col5'), { threshold: 0.2 });
  const col6Ref = useIntersectionObserver((entries) => handleIntersection(entries, 'col6'), { threshold: 0.2 });


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
        Services
      </title>
      <meta name= 'description' content='We offer a wide range of services such as domilicary care, supported living and companionship'/>
     <link rel= 'canonical' href='/services' />
    </Helmet>
    <motion.div className='mission'  variants={containerVariant} exit='exit'>
     
    <div className='service-page h-[100vh] w-[100vw]'>
      <div className='service-page-container' ref={topRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
        <div >

        <Navbar  />
        </div>

        <div className= 'h-[70vh] w-[80vw] m-[auto] flex items-center justify-center text-[white] text-[80px] text-center font-[500] xs:text-[40px] md:text-[50px] lg:text-[60px]'  >
        Get assisted living for disabilities and <br/> challenging behaviour
        </div>

      </div>
    </div>
   
   <div className='w-[100vw] '>

    <div className='w-[90vw] m-[auto] p-[25px] xs:w-[100vw] ' >
        <h1 className='w-[90vw] flex items-center text-[#294B29]  justify-center font-[600] text-[45px] xs:text-center xs:text-[37px] '  ref={servicesRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            Our services
        </h1>

        <div className='w-[90vw] flex justify-center text-[30px]  mt-[50px] text-center  mb-[50px] xs:text-[18px] xs:text-left md:text-justify md:m-[auto] md:w-[85vw] md:mb-[60px] md:text-[22px] lg:text-[26px]'  ref={serveRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
        Domiciliary care, supported living, live-in care, companionship, palliative care, and respite care from
      a comprehensive suite of services designed to meet the diverse needs of individuals within the healthcare and support sector.

        </div>
        <div className='flex items-center justify-center gap-[50px] mb-[40px] flex-wrap'  >

            <div className='flex flex-col items-center justify-center p-2 h-[60vh] text-[white] bg-[#294B29] gap-[20px] rounded-[15px] serve-col xs:w-[340px] xs:h-[73vh]' ref={col1Ref} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            <p className = 'font-[700] text-[25px] text-[white]'>Domiciliary Care </p>
       <img src='images/dom.png' alt='domiciliary care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px] xs:w-[90%]'>
      Domiciliary care is a cornerstone service that provides personalized support within the comfort of an individual's home. 
      It encompasses assistance with daily tasks, ranging from personal hygiene to medication management. By prioritizing 
      independence and familiarity, domiciliary care promotes a sense of security and well-being for clients.

      </p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 h-[60vh] bg-[#294B29] text-[white] gap-[20px] rounded-[15px] serve-col xs:w-[340px] xs:h-[73vh]' ref={col2Ref} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            <p className = 'font-[700] text-[25px] text-[white]'>Supported Living </p>
       <img src='images/dom-care.png' alt='supported living' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px] xs:w-[90%]'>
      Supported living takes the concept of independence to the next level, creating a supportive environment for individuals with diverse needs.
       This service extends beyond addressing physical health concerns to include mental and emotional well-being. Through tailored assistance, 
       supported living empowers individuals to lead fulfilling lives, bridging the gap between autonomy and necessary support.

      </p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 h-[60vh] bg-[#294B29] text-[white] gap-[20px] rounded-[15px] serve-col xs:w-[340px]  xs:h-[73vh]' ref={col3Ref} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            <p className = 'font-[700] text-[25px] text-[white]'>Live-in Care </p>
       <img src='images/home.png' alt='Live-in Care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px] xs:w-[90%]'>
      Live-in care offers continuous support, ensuring individuals receive around-the-clock
       assistance within their homes. This service is particularly beneficial for those with
        ongoing health challenges or age-related issues. Beyond addressing immediate needs, 
        the presence of a caregiver provides companionship, fostering a sense of security and emotional well-being.

      </p>
            </div>
      

        <div className='flex flex-col items-center justify-center p-2 h-[60vh]  bg-[#294B29] text-[white] gap-[20px] rounded-[15px] serve-col xs:w-[340px]  xs:h-[73vh]' ref={col4Ref} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            <p className = 'font-[700] text-[25px] text-[white]'>Companionship </p>
       <img src='images/friends.png' alt='Companionship' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px] xs:w-[90%]'>
      Companionship services recognize the significance of social interaction in overall health. 
      Through engaging conversations, shared activities, or simply being a supportive presence, 
      companionship contributes significantly to an individual's quality of life. This service 
      is particularly valuable for combating loneliness or isolation, promoting a sense of 
      connection and belonging.

      </p>
            </div>


            <div className='flex flex-col items-center justify-center p-2 h-[60vh]  bg-[#294B29] text-[white] gap-[20px] rounded-[15px] serve-col xs:w-[340px]  xs:h-[73vh]' ref={col5Ref} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            <p className = 'font-[700] text-[25px] text-[white]'>Palliative Care </p>
       <img src='images/care.png' alt='Palliative Care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px] xs:w-[90%]'>
      Palliative care is a specialized service focused on enhancing the quality of life for individuals facing serious illnesses.
       It adopts a holistic approach, addressing physical symptoms alongside emotional and spiritual well-being. The goal is to 
       provide comfort and dignity, ensuring individuals and their families navigate the challenges of serious illnesses with comprehensive support.

      </p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 h-[60vh]  bg-[#294B29] text-white gap-[20px] rounded-[15px] serve-col xs:w-[340px]  xs:h-[73vh]' ref={col6Ref} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
            <p className = 'font-[700] text-[25px] text-[white]'>Respite Care </p>
       <img src='images/respite.png' alt='Respite Care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]  xs:w-[90%] xs:text-[13px]'>
      Respite care acknowledges the vital role of primary caregivers, offering them temporary relief. 
      Caregivers, often family members, can take a break while ensuring their loved ones continue to receive necessary care.
      This service aims to prevent caregiver burnout, promoting the well-being of both the individual receiving care and
      their primary caregivers.

      </p>
            </div>
        </div>
    </div>

        <div className='p-[25px] bg-[#294B29] rounded-[15px] flex justify-center w-[90vw] m-[auto] text-[20px] font-[600] text-[white] xs:text-[15px] xs:text-center'  ref={summaryRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
        In summary, these services collectively underscore a commitment to individualized care, prioritizing dignity, independence, and holistic well-being. 
         Whether addressing basic daily tasks or providing emotional support during challenging times,businesses offering these services contribute
         significantly to the overall health and quality of life for those they serve.
        </div>

   </div>

   <div  className='toppage w-[100vw] h-[auto]'>

<div className='serve h-[100vh] w-[100vw] flex items-center justify-center xs:h-[60vh]'  ref={clientRef} style={{ opacity: 0, transition: 'opacity 1s ease-in' }}>
  <div className='serve-container text-[white] '>
  <p className='text-[45px]  xs:text-[20px] lg:text-[25px] '>
  “I underestimated how hard it was to find support for my adult son who has challenging behaviour, 
   but getting advice from Birch gave me great confidence.”
  </p>
  <p className='text-[38px] font-[100] xs:text-[22px] md:text-[32px]'>
  — LUCY R., BIRCH ADVICE  CLIENT
  </p>
 
  </div>
</div>
</div>
<Footer/>

    </motion.div>
    </>
  )
}

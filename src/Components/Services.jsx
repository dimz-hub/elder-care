import React,{useEffect, useRef} from 'react'
import { FaCross } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Services() {

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

  const servicesRef1 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving1'), { threshold: 0.5 });
  const servicesRef2 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving2'), { threshold: 0.5 });
  const servicesRef3 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving3'), { threshold: 0.5 });
  const servicesRef4 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving4'), { threshold: 0.5 });
  const servicesRef5 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving5'), { threshold: 0.5 });
  const servicesRef6 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving6'), { threshold: 0.5 });
  const servicesRef7 = useIntersectionObserver((entries) => handleIntersection(entries, 'serving7'), { threshold: 0.5 });

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


     
    
    
    
    <div className='services bg-[#294B29] w-[100vw] '>
      <div >

 <div className='w-[90vw] m-[auto] p-[25px] flex items-center justify-center flex-col ' >

    <h1 className = 'text-[white] text-[40px] font-[600] mb-[50px] xs:text-[38px]'  ref={servicesRef1} style={{  transition: 'opacity 1s ease', opacity: 0 }}  >Our Services</h1>
    
    <div className='flex items-center justify-center gap-[20px] mb-[40px] flex-wrap' >
    <div className='w-[300px] h-[250px] bg-[#DBE7C9] rounded-[20px] flex flex-col items-center justify-center pt-[20px] p-[10px] gap-[20px] service-col'  ref={servicesRef2} style={{  transition: 'opacity 1s ease', opacity: 0 }} >
      <p className = 'font-[700] text-[25px] text-center'>Domiciliary Care</p>
       <img src='images/medical.png' alt='domiciliary care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Domiciliary care is a cornerstone service that provides personalized support within the comfort of an individual's home.
      </p>
    </div>
    <div className='w-[300px] h-[250px] bg-[#DBE7C9] rounded-[20px] flex flex-col items-center p-[10px]  pt-[20px] gap-[20px] service-col justify-center'  ref={servicesRef3} style={{  transition: 'opacity 1s ease', opacity: 0 }} >
      <p className = 'font-[700] text-[25px] text-center'>Supported Living </p>
       <img src='images/nurse.png' alt='supported living' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Supported living takes the concept of independence to the next level,creating a supportive environment for individuals with diverse needs
      </p>
    </div>
    <div className='w-[300px] h-[250px] bg-[#DBE7C9] rounded-[20px] flex flex-col items-center justify-center p-[10px] pt-[20px] gap-[20px] service-col'  ref={servicesRef4} style={{  transition: 'opacity 1s ease', opacity: 0 }} >
      <p className = 'font-[700] text-[25px] text-center'>Live-in Care</p>
       <img src='images/live-in-care.png' alt='live-in care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Live-in care offers continuous support, ensuring individuals receive around-the-clock assistance within their homes.
      </p>
    </div>
    <div className='w-[300px] h-[250px] bg-[#DBE7C9] rounded-[20px] flex flex-col items-center justify-center p-[10px] pt-[20px] gap-[20px] service-col'  ref={servicesRef5} style={{  transition: 'opacity 1s ease', opacity: 0 }} >
      <p className = 'font-[700] text-[25px] text-center'>Companionship</p>
       <img src='images/friend.png' alt='companionship' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Companionship services recognize the significance of social interaction in overall health.
      </p>
    </div>
    <div className='w-[300px] h-[250px] bg-[#DBE7C9] rounded-[20px] flex flex-col items-center justify-center p-[10px] pt-[20px] gap-[20px] service-col'  ref={servicesRef6} style={{  transition: 'opacity 1s ease', opacity: 0 }} >
      <p className = 'font-[700] text-[25px] text-center'>Palliative Care</p>
       <img src='images/care2.png' alt='palliative care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Palliative care is a specialized service focused on enhancing the quality of life for individuals facing serious illnesses.
      </p>
    </div>
    <div className='w-[300px] h-[250px] bg-[#DBE7C9] rounded-[20px] flex flex-col items-center justify-center pt-[20px]  p-[10px] gap-[20px] service-col'  ref={servicesRef7} style={{  transition: 'opacity 1s ease', opacity: 0 }} >
      <p className = 'font-[700] text-[25px] text-center'>Respite Care</p>
       <img src='images/respite-care.png' alt='Respite care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Respite care acknowledges the vital role of primary caregivers, offering them temporary relief
      </p>
    </div>
    

    </div>
    <Link to={'/services'}>
    <button className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[10px]  w-[12rem] rounded-[10px] mt-[15px]  '>
        Learn More
      </button>
    </Link>
 </div>
   

   {/* <img src='images/couch.png' alt='assited-living' className='w-[100px] h-[100px]' /> */}

      </div>
   
    </div>
    
    
  )
}

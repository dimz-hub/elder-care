import React,{useEffect, useRef} from 'react'
import TopPage from './TopPage'
import Services from './Services'
import Mission from './Mission'
import Savehaven from './Savehaven'
import Stayhome from './Stayhome'
import Clientreview from './Clientreview'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

export default function LandingPage() {

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
   const missionRef = useIntersectionObserver((entries) => handleIntersection(entries, 'mission'), { threshold: 0.5 });
   const saveRef = useIntersectionObserver((entries) => handleIntersection(entries, 'save'), { threshold: 0.5 });
   const homeRef = useIntersectionObserver((entries) => handleIntersection(entries, 'home'), { threshold: 0.5 });
   const servicesRef = useIntersectionObserver((entries) => handleIntersection(entries, 'services'), { threshold: 0.5 });
   const clientRef = useIntersectionObserver((entries) => handleIntersection(entries, 'client'), { threshold: 0.5 });
   const teamRef = useIntersectionObserver((entries) => handleIntersection(entries, 'team'), { threshold: 0.5 });
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


  return (
    <div   >
        <TopPage topRef={topRef} />
        <Mission missionRef={missionRef}/>
        <Savehaven saveRef={saveRef}/>
        <Stayhome  homeRef={homeRef}/>
        <Services servicesRef={servicesRef} />
        <Clientreview clientRef={clientRef} />
        <Team  teamRef={teamRef}/>
         <Contact  contactRef={contactRef}/>  
         <Footer />
        
    </div>
  )
}

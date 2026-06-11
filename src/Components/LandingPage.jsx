import React, { useEffect, useRef } from 'react'
import TopPage from './TopPage'
import Services from './Services'
import Mission from './Mission'
import Savehaven from './Savehaven'
import Stayhome from './Stayhome'
import Clientreview from './Clientreview'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import CqcAnnouncement from './CQC'

export default function LandingPage() {

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

  const topRef = useIntersectionObserver((entries) => handleIntersection(entries, 'top'), { threshold: 0.2 });
  // Added the explicit observer hook for the CQC wrapper
  const cqcRef = useIntersectionObserver((entries) => handleIntersection(entries, 'cqc'), { threshold: 0.1 });
  const missionRef = useIntersectionObserver((entries) => handleIntersection(entries, 'mission'), { threshold: 0.2 });
  const saveRef = useIntersectionObserver((entries) => handleIntersection(entries, 'save'), { threshold: 0.2 });
  const homeRef = useIntersectionObserver((entries) => handleIntersection(entries, 'home'), { threshold: 0.2 });
  const servicesRef = useIntersectionObserver((entries) => handleIntersection(entries, 'services'), { threshold: 0.2 });
  const clientRef = useIntersectionObserver((entries) => handleIntersection(entries, 'client'), { threshold: 0.2 });
  const teamRef = useIntersectionObserver((entries) => handleIntersection(entries, 'team'), { threshold: 0.2 });
  const contactRef = useIntersectionObserver((entries) => handleIntersection(entries, 'contact'), { threshold: 0.2 });

  const handleIntersection = (entries, section) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  };

  const containerVariant = {
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut'
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name='description' content='Welcome to Birch social limited, a domiciliary, supported living and live in care provider providing care for people with dementia mental health,....' />
        <link rel='canonical' href='/' />
      </Helmet>

      <motion.div className='mission w-full overflow-x-hidden' variants={containerVariant} exit='exit'>
        
        <div className='xs:z-10 xs:relative'>
          <TopPage topRef={topRef} className='xs:z-30 xs:relative' />
        </div>

        {/* 
          CRITICAL FIX: Isolated container layer. 
          Matches stacking context, handles entry opacity smoothly, and prevents mobile overflow.
        */}
        <div 
          ref={cqcRef} 
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
          className="relative z-10 w-full bg-white block clear-both"
        >
          <CqcAnnouncement />
        </div>

        <Mission missionRef={missionRef} />
        <Savehaven saveRef={saveRef} />
        <Stayhome homeRef={homeRef} />
        <Services servicesRef={servicesRef} />
        
        <div className='xs:z-10 xs:relative'>
          <Clientreview clientRef={clientRef} />
        </div>
        
        <Team teamRef={teamRef} />
        <Contact contactRef={contactRef} />  
        <Footer />
         
      </motion.div>
    </>
  )
}
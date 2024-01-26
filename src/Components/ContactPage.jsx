import React, {useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

export default function ContactPage() {



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

  return (
    <div>
<div className='mission'>
<Navbar/>
</div>
<Contact contactRef={ contactRef}/>
<Footer/>


    </div>
  )
}

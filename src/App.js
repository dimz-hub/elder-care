import React, {useRef, useEffect} from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Enquiry from './Components/Enquiry';
import Signup from './Components/Signup';
import Admin from './Components/Admin';
import Signin from './Components/Signin';
import About from './Components/About';
import ServicePage from './Components/ServicePage';
import ContactPage from './Components/ContactPage'
import {AnimatePresence} from 'framer-motion'
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

const location = useLocation()
 
  

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
      <AnimatePresence mode='wait'>

    <Routes location={location} key={location.key}>



  <Route path='/' element = {<LandingPage />} />
 <Route path='/enquiry' element = {<Enquiry/>} />
 {/* <Route path='/signup' element = {<Signup/>} /> */}
 <Route path='/signin' element = {<Signin/>} />
 <Route path='/services' element = {<ServicePage/>} />
 <Route path='/about' element = {<About/>} />
 <Route path='/contact' element = {<ContactPage contactRef={contactRef} />} />

   <Route path='/admin' element = {
    <ProtectedRoute>
     <Admin /> 
    </ProtectedRoute>
  } />    





     
 </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

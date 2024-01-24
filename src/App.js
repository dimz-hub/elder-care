import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Enquiry from './Components/Enquiry';
import Signup from './Components/Signup';
import Admin from './Components/Admin';
import Signin from './Components/Signin';
import About from './Components/About';
import ServicePage from './Components/ServicePage';
import ContactPage from './Components/ContactPage'
import {Aos} from 'aos'
import 'aos/dist/aos.css'


function App() {
  return (

    <div>
    <Routes>
  <Route path='/' element = {<LandingPage />} />
 <Route path='/enquiry' element = {<Enquiry/>} />
 <Route path='/signup' element = {<Signup/>} />
 <Route path='/admin' element = {<Admin/>} />
 <Route path='/signin' element = {<Signin/>} />
 <Route path='/admin' element = {<Admin/>} />
 <Route path='/services' element = {<ServicePage/>} />
 <Route path='/about' element = {<About/>} />
 <Route path='/contact' element = {<ContactPage/>} />
  {/* <Route path='/signup' element = {<SignUp />} />
  <Route path='/chat' element = {
    <ProtectedRoute>
    <Chat />
    </ProtectedRoute>
  } /> */} 
 </Routes>
    </div>
  );
}

export default App;

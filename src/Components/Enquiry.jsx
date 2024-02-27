import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import {db} from '../util/firebase'
// import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp, onSnapshot} from "firebase/firestore";
import {v4 as uuid}  from 'uuid'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import {Helmet} from 'react-helmet'



export default function Enquiry() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate()



     const [firstName, setFirstName] = useState('')
     const [lastName, setLastName] = useState('')
     const [number, setNumber] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')
     const [enquiry, setEnquiry] = useState(null)
     const [enquiries, setEnquiries] = useState([]);

     const [isSubmit , setIsSubmit] = useState(false)

     async function handleSubmit(e) {
        e.preventDefault()
        // await addDoc(collection(db, "enquires"), {
        //   firstName: firstName,
        //   lastName: lastName,
        //   number:number || null,
        //   email:email,
        //   message:message,
        //   enquiry:enquiry

        // });


        const newEnquiry = {
          id:uuid(),
          firstName: firstName,
          lastName: lastName,
          number: number || null,
          email: email,
          message: message,
          enquiry: enquiry,
          time: Timestamp.now()
        };
    
        setEnquiries([...enquiries, newEnquiry]);
    
        await addDoc(collection(db, 'enquires'), newEnquiry);
    
        setFirstName('');
        setLastName('');
        setNumber('');
        setEmail('');
        setMessage('');
        setEnquiry('');
try{

  setInterval(setIsSubmit(true), 1000)
        setTimeout(() => {
          clearInterval( setInterval(setIsSubmit(true), 1000))
          setIsSubmit(false)
        },3000)

        setTimeout(() => {
          navigate('/')
        },4000)
      }catch(err){
        // console.log(err.message)
      }
     } 

  
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
        Enquiry
      </title>
      <meta name= 'description' content='Let us know your needs and how best we can help'/>
     <link rel= 'canonical' href='/enquiry' />
    </Helmet>
  
    <motion.div className='w-[100vw]  mission' variants={containerVariant} exit='exit' > 
     <div className='w-[90vw] p-[25px] m-[auto] flex flex-col items-center justify-center xs:w-[100vw]'> 
             <h1 className='text-[45px] font-[800] text-[#4F6F52] mb-[25px] xs:text-center xs:text-[37px]'>
                Make an Enquiry
             </h1>
             <p className='text-center font-[500] text-[25px] mb-[30px] xs:text-[20px]  '>
            
Please make us aware of your preferences, and we will reach out to you <br/> via phone or email to discuss your requirements.
             </p>

             <form className='flex flex-col gap-[15px]  xs:m-[auto]  '  onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center ' >
          <label for="firstname" className='text-[]] text-[22px] font-[400]' >First Name <span className=' font-[200] text-[17px]'> (required)  </span>  </label>
         <input   className='enquiry-input xs:w-[85vw]'  type="text" id="firstname" name="firstname" value={firstName} required  onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-center' >
          <label for="lastname" className='text-[] text-[22px] font-[400]'>Last Name<span className=' font-[200] text-[17px]'> (required)  </span> </label>
         <input  className='enquiry-input xs:w-[85vw]' type="text" id="lastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div className='flex flex-col justify-center' >
          <label for="number" className='text-[] text-[22px] font-[400]'>Phone Number</label>
         <input  className='enquiry-input xs:w-[85vw]' type="text" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-center' >
          <label for="email" className='text-[] text-[22px] font-[400]'> Email Address <span className=' font-[200] text-[17px]'> (required)  </span></label>
         <input  className='enquiry-input xs:w-[85vw]' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                What would you like to enquire about? <span className=' font-[200] text-[17px]'> (required)  </span>
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='enquire' required checked={enquiry === 'Care for yourself or a loved one' } value="Care for yourself or a loved one" onChange={(e) => setEnquiry(e.target.value)} /> Care for yourself or a loved one
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='enquire'  required   value="A job in care" checked={enquiry === 'A job in care'} onChange={(e) => setEnquiry(e.target.value)}/> A job in care
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center gap-[10px]' >
          <label for="message" className='text-[] text-[22px] font-[400]'> Message <span className='text-[gray] font-[200] text-[17px]'> (required)  </span></label>
    <textarea id="message" name="message" rows="4" cols="50" placeholder="Type your message here" value={message} required className='enquiry-textarea rounded-[5px] xs:w-[85vw]' onChange={(e) => setMessage(e.target.value)}></textarea>

          </div>
      
      
<div className ='xs:w-[50vw] xs:m-[auto]'>
          <button type='submit' className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[150px] w-[12rem] rounded-[10px] mt-[15px] font-[600] xs: xs:text-center xs:ml-[0px] '>
            Submit Enquiry
          </button> 
          </div>
         
             </form>
             {
               isSubmit && <div className='text-[25px] font-[600] text-[] ' >
                 Submitted 😄
               </div>
             }
     </div>

     <Footer/>

    </motion.div>
    </>
  )
}

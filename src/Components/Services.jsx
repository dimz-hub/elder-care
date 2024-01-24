import React from 'react'
import { FaCross } from 'react-icons/fa';

export default function Services({servicesRef}) {
  return (
    <div className='services bg-[#7FC7D9] w-[100vw]  h-[100vh]'>
      <div >

 <div className='w-[90vw] m-[auto] p-[25px] flex items-center justify-center flex-col gap-[70px]' >

    <h1 className = 'text-[white] text-[35px] font-[600]' >Our Services</h1>
    
    <div className='flex items-center justify-center gap-[20px]'>
    <div className='w-[15vw] h-[20rem] bg-[white] rounded-[20px] flex flex-col items-center pt-[20px] p-[10px] gap-[20px] service-col'>
      <p className = 'font-[700] text-[25px] text-center'>Domiciliary Care</p>
       <img src='images/medical.png' alt='domiciliary care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Domiciliary care is a cornerstone service that provides personalized support within the comfort of an individual's home.
      </p>
    </div>
    <div className='w-[15vw] h-[20rem] bg-[white] rounded-[20px] flex flex-col items-center p-[10px]  pt-[20px] gap-[20px] service-col'>
      <p className = 'font-[700] text-[25px] text-center'>Supported Living </p>
       <img src='images/supported-living.png' alt='supported living' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[12px] font-[600] text-center'>
      Supported living takes the concept of independence to the next level,creating a supportive environment for individuals with diverse needs
      </p>
    </div>
    <div className='w-[15vw] h-[20rem] bg-[white] rounded-[20px] flex flex-col items-center  p-[10px] pt-[20px] gap-[20px] service-col'>
      <p className = 'font-[700] text-[25px]'>Live-in Care</p>
       <img src='images/live-in-care.png' alt='live-in care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center'>
      Live-in care offers continuous support, ensuring individuals receive around-the-clock assistance within their homes.
      </p>
    </div>
    <div className='w-[15vw] h-[20rem] bg-[white] rounded-[20px] flex flex-col items-center p-[10px] pt-[20px] gap-[20px] service-col'>
      <p className = 'font-[700] text-[25px]'>Companionship</p>
       <img src='images/companionship.png' alt='companionship' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center'>
      Companionship services recognize the significance of social interaction in overall health.
      </p>
    </div>
    <div className='w-[15vw] h-[20rem] bg-[white] rounded-[20px] flex flex-col items-center  p-[10px] pt-[20px] gap-[20px] service-col'>
      <p className = 'font-[700] text-[25px]'>Palliative Care</p>
       <img src='images/care.png' alt='palliative care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center'>
      Palliative care is a specialized service focused on enhancing the quality of life for individuals facing serious illnesses.
      </p>
    </div>
    <div className='w-[15vw] h-[20rem] bg-[white] rounded-[20px] flex flex-col items-center pt-[20px]  p-[10px] gap-[20px] service-col'>
      <p className = 'font-[700] text-[25px]'>Respite Care</p>
       <img src='images/respite-care.png' alt='Respite care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center'>
      Respite care acknowledges the vital role of primary caregivers, offering them temporary relief
      </p>
    </div>
    

    </div>
    <button className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[10px]  w-[12rem] rounded-[10px] mt-[15px]  '>
        Learn More
      </button>
 </div>
   

   {/* <img src='images/couch.png' alt='assited-living' className='w-[100px] h-[100px]' /> */}

      </div>
   
    </div>
  )
}

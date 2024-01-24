import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ServicePage() {
  return (
    <div>
     
    <div className='service-page h-[100vh] w-[100vw]'>
      <div className='service-page-container'>
        <div >

        <Navbar  />
        </div>

        <div className= 'h-[70vh] w-[80vw] m-[auto] flex items-center justify-center text-[white] text-[80px] text-center font-[500]'>
        Get assisted living for disabilities and <br/> challenging behaviour
        </div>

      </div>
    </div>
   
   <div className=''>

    <div className='w-[90vw] m-[auto] p-[25px]'>
        <h1 className='w-[90vw] flex items-center justify-center font-[600] text-[45px]'>
            Our services
        </h1>

        <div className='w-[90vw] flex justify-center text-[30px]  mt-[50px] text-center  mb-[50px]'>
        Domiciliary care, supported living, live-in care, companionship, palliative care, and respite care from
      a comprehensive suite of services designed to meet the diverse needs of individuals within the healthcare and support sector.

        </div>
        <div className='flex items-center justify-center gap-[50px] mb-[40px]'>

            <div className='flex flex-col items-center justify-center p-2 h-[60vh] bg-[#7FC7D9] gap-[20px] rounded-[15px] serve-col'>
            <p className = 'font-[700] text-[25px] text-[white]'>Domiciliary Care </p>
       <img src='images/medical.png' alt='domiciliary care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]'>
      Domiciliary care is a cornerstone service that provides personalized support within the comfort of an individual's home. 
      It encompasses assistance with daily tasks, ranging from personal hygiene to medication management. By prioritizing 
      independence and familiarity, domiciliary care promotes a sense of security and well-being for clients.

      </p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 h-[60vh] bg-[#7FC7D9] gap-[20px] rounded-[15px] serve-col'>
            <p className = 'font-[700] text-[25px] text-[white]'>Supported Living </p>
       <img src='images/supported-living.png' alt='supported living' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]'>
      Supported living takes the concept of independence to the next level, creating a supportive environment for individuals with diverse needs.
       This service extends beyond addressing physical health concerns to include mental and emotional well-being. Through tailored assistance, 
       supported living empowers individuals to lead fulfilling lives, bridging the gap between autonomy and necessary support.

      </p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 h-[60vh] bg-[#7FC7D9] gap-[20px] rounded-[15px] serve-col'>
            <p className = 'font-[700] text-[25px] text-[white]'>Live-in Care </p>
       <img src='images/live-in-care.png' alt='Live-in Care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]'>
      Live-in care offers continuous support, ensuring individuals receive around-the-clock
       assistance within their homes. This service is particularly beneficial for those with
        ongoing health challenges or age-related issues. Beyond addressing immediate needs, 
        the presence of a caregiver provides companionship, fostering a sense of security and emotional well-being.

      </p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-[50px]'>

        <div className='flex flex-col items-center justify-center p-2 h-[60vh]  bg-[#7FC7D9] gap-[20px] rounded-[15px] serve-col'>
            <p className = 'font-[700] text-[25px] text-[white]'>Companionship </p>
       <img src='images/companionship.png' alt='Companionship' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]'>
      Companionship services recognize the significance of social interaction in overall health. 
      Through engaging conversations, shared activities, or simply being a supportive presence, 
      companionship contributes significantly to an individual's quality of life. This service 
      is particularly valuable for combating loneliness or isolation, promoting a sense of 
      connection and belonging.

      </p>
            </div>


            <div className='flex flex-col items-center justify-center p-2 h-[60vh]  bg-[#7FC7D9] gap-[20px] rounded-[15px] serve-col'>
            <p className = 'font-[700] text-[25px] text-[white]'>Palliative Care </p>
       <img src='images/care.png' alt='Palliative Care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]'>
      Palliative care is a specialized service focused on enhancing the quality of life for individuals facing serious illnesses.
       It adopts a holistic approach, addressing physical symptoms alongside emotional and spiritual well-being. The goal is to 
       provide comfort and dignity, ensuring individuals and their families navigate the challenges of serious illnesses with comprehensive support.

      </p>
            </div>
            <div className='flex flex-col items-center justify-center p-2 h-[60vh]  bg-[#7FC7D9] gap-[20px] rounded-[15px] serve-col'>
            <p className = 'font-[700] text-[25px] text-[white]'>Respite Care </p>
       <img src='images/respite-care.png' alt='Respite Care' className= 'w-[65px] h-[65px]'/> 
      <p className='text-[15px] font-[600] text-center w-[400px]'>
      Respite care acknowledges the vital role of primary caregivers, offering them temporary relief. 
      Caregivers, often family members, can take a break while ensuring their loved ones continue to receive necessary care.
      This service aims to prevent caregiver burnout, promoting the well-being of both the individual receiving care and
      their primary caregivers.

      </p>
            </div>
        </div>
    </div>

        <div className='p-[25px] bg-[#7FC7D9] rounded-[15px] flex justify-center w-[90vw] m-[auto] text-[20px] font-[600] text-[white] '>
        In summary, these services collectively underscore a commitment to individualized care, prioritizing dignity, independence, and holistic well-being. 
         Whether addressing basic daily tasks or providing emotional support during challenging times,businesses offering these services contribute
         significantly to the overall health and quality of life for those they serve.
        </div>

   </div>

   <div  className='toppage'>

<div className='serve h-[100vh] w-[100vw] flex items-center justify-center'>
  <div className='serve-container text-[white] '>
  <p className='text-[45px]'>
  “I underestimated how hard it was to find support for my adult son who has challenging behaviour, 
   but getting advice from Birch gave me great confidence.”
  </p>
  <p className='text-[38px] font-[100]'>
  — LUCY R., BIRCH ADVICE  CLIENT
  </p>
 
  </div>
</div>
</div>
<Footer/>

    </div>
  )
}

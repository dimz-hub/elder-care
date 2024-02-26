import React from 'react'



export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='w-[100vw]  bg-[black] text-[white]  '>
      <div  className='w-[90vw] m-[auto] p-[25px] flex flex-col items-center   justify-center'>



  <div className='flex flex-col items-center justify-center  '>
    <img src='images/Birch.png'  alt='birch-logo' className='w-[120px] h-[120px]  '/>
<div className='text-center ml-[20px]'>

<p className='text-[20px] font-[600]'>
  Tiffany@joinbirch.org
</p>

    <p className='text-[20px] font-[600] mt-[10px]'>07597936369
</p>
    <div className='mt-[10px]'>
    <p className='text-[20px] font-[600]'>
      86-90 Paul Street
    </p>
    <p className='text-[20px] font-[600]'>London,EC2A 4NE</p>
    </div>

    <div className='flex items-center justify-center gap-[12px] mt-[5px]'>
  <img src='images/uk-logo.png' alt='uk flag' className='w-[50px] h-[50px]' />
<p className='text-[20px] font-[600]'>United Kingdom</p>
    </div>
    <div className='flex item-center justify-center mt-[10px] mb-[10px]'>

<img src='images/care-quality.jpg' className='w-[130px] h-[auto]' alt='care quality commision' />
    </div>

<p>
  Copyright <span>&copy;</span>Birch Limited {currentYear}
</p>
</div>
  </div>
</div>
      </div>
    
  )
}

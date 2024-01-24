import React from 'react'

export default function Clientreview({clientRef}) {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#DCF2F1] client-review '>
        <div className='client-review-container'>

        <div className='w-[90vw] m-[auto] flex items-center justify-center flex-col  pt-[80px]'>
            <h1 className='text-[65px] font-[800] text-[black] mb-[25px]' >Hear what others are saying</h1>
            <p className='text-[42px] text-center w-[90%] font-[600] text-[black] mt-[40px]'>"Birch helped quickly provide phenomenal advice on care, which gave my family peace of mind where my aunt needed support. We're planning to move into their facility"</p>
            <p className='text-[30px] mt-[50px]'>  -<span className='font-[600] '>SUZANNE</span>,Client's Family</p>
        </div>
        </div>
    </div>
  )
}

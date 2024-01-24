import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

export default function ContactPage({contactRef}) {
  return (
    <div>
<div className='bg-[#7FC7D9]'>
<Navbar/>
</div>
<Contact contactRef={ contactRef}/>
<Footer/>


    </div>
  )
}

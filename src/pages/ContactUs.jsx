import React from 'react'
import home from '../assets/Contact-banner.jpg'
import Section from '../components/mainSection/Section'
import email from '../assets/email.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import './styles/ContactUs.css'
function ContactUs() {
  return (
    <div className='bg-white dark:bg-black '>
        <Section img={home} />
        <div className='contactUs-links flex justify-evenly  w-full mt-28'>
            <a href='' className=' bg-white p-2   w-16 h-16 rounded flex items-center justify-center  '> <img src={facebook} alt='' className='' /> </a> 
            <a href='' className=' bg-white p-2  w-16 h-16 rounded flex items-center justify-center  '><img src={instagram} alt='' className=''  />  </a>
            <a href='' className=' bg-white p-2  w-16 h-16 rounded flex items-center justify-center  '><img src={linkedin} alt=''  className=''/>  </a>
            <a href='' className=' bg-white p-2  w-16 h-16 rounded flex items-center justify-center  '><img src={twitter} alt=''   className='' /> </a>
            <a href='' className=' bg-white p-2  w-16 h-16 rounded flex items-center justify-center  '> <img src={email} alt=''    className=''  />   </a>
        </div>
    </div>
  )
}

export default ContactUs
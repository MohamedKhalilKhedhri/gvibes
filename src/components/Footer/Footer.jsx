import React from 'react'
import { Link } from 'react-router-dom'
import email from '../../assets/email.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';

import './Footer.css'
function Footer() {
  return (
    <div className='footer bg-black text-white'>
        <div className='f1'>
            <h2>Good Vibes</h2>
            <p>&copy;All rights reserved to Goodvibes 2024.</p>
        </div>
        <ul className='f2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Couples</Link></li>
                <li><Link to="/">Fashion</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/">Commercials</Link></li>
                <li><Link to="/">Contact Us</Link></li>
        </ul>
       
     
    </div>
  )
}

export default Footer
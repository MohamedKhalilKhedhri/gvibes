import React, { useEffect } from 'react';
import './Section.css';
import { motion } from 'framer-motion';
import Btn from '../button/Btn';

function Section(props) {
    const screenWidth = window.innerWidth;

   
    return (
        <div className='mainsection'>
            <img src={props.img} alt=''  />
            <span className='img-darker'></span>
            <div className='absolute sectiontext'>
                <h1 initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} transition={{duration:.5}} className='sectiontxt text-white font-semibold text-3xl italic text-center'>When moments meet good vibes</h1>
                <div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:.5,delay:.5}} className="button-borders">
                    <Btn />
                </div>
            </div>
        </div>
    );
}

export default Section;

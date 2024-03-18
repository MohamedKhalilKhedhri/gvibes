import React, { useState } from 'react';
import './Modal.css';
import { AnimatePresence, motion } from "framer-motion"
function Modal(props) {
  const variants = {
    initial:{x:1.1, opacity:0},
    animate:{scale:1,opacity:1},
    exit:{scale:0.8, opacity:0}
  }

  const nextImageIndex = (props.currentIndex + 1) % props.images.length;
  const prevImageIndex = (props.currentIndex - 1 + props.images.length) % props.images.length;
  return (
    <div className='modal bg-white dark:bg-black'>
      <button className='toggleimages previmg text-black dark:text-white bg-white dark:bg-black' onClick={()=>{props.closeModal(prevImageIndex)}}> {'<'} </button>
      <div className='popcontainer'>
      <AnimatePresence mode='wait'>
          <motion.img
            key={props.currentIndex} // Unique key based on currentIndex
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{duration:0.4}}
            variants={variants}
            src={props.images[props.currentIndex]}
            alt=''
          />
        </AnimatePresence>
      </div>
      <button className='toggleimages nextimg text-black dark:text-white bg-white dark:bg-black' onClick={()=>{props.closeModal(nextImageIndex)}}> {'>'} </button>

      <button className='closepop   text-black dark:text-white' onClick={()=>props.closeModal(null)}> X </button>
    </div>
  );
}

export default Modal;

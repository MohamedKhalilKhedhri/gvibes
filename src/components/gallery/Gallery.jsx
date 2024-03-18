import React, { useContext, useEffect, useRef, useState } from 'react';
import './Gallery.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from '../imageModal/Modal.jsx';
import { AnimatePresence, motion } from "framer-motion";
import Mainvid from '../Mainvideo/Mainvid.jsx';
import Gloader from '../galleryLoader/Gloader.jsx';

function Gallery(props) {
    const [modalImg, setModal] = useState(null);  

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    };
    const bigVidRef = useRef(null)
   
    const handleClick = (index) => {
            setModal(index); // Set modalImg state for images
          
    
    };
  

    return (
        <>
             <AnimatePresence mode='wait'>
             {modalImg !== null && (
                 (props.vid ? 
                      (
                       <div id='bigvid' className='' ref={bigVidRef}><Mainvid currentIndex={modalImg} closeModal={setModal} videos={props.gallery} /></div>
                       ) 
                       : (
                  <motion.div className='pop'
                      key={1}
                      initial='initial'
                      animate='animate'
                      exit='exit'
                      transition={{ duration: 0.4 }}
                      variants={variants}
                  >
                      <Modal images={props.gallery} currentIndex={modalImg} closeModal={setModal} />
                  </motion.div>
             )
             ))
        }                     
    
            </AnimatePresence>
            <InfiniteScroll  className='infinitS'
            dataLength={props.gallery.length}
            next={() => props.fetchData()}
            hasMore={!props.allDataFetched}
            loader={<Gloader />}
            endMessage={
                    props.allDataFetched ? (
                    <p className='text-black dark:text-white' style={{ textAlign: 'center' }}>
                    <b>No more images to display</b>
                    </p>
                ) : null
                }
            >
                <div className='gallery'>
                    {props.gallery.map((img, i) => {
                        if (props.vid) {
                            return (
                                <video key={i} src={img} alt='' className='media' onClick={() =>{handleClick(i);}} />
                            );
                        } else {
                            return (
                                <motion.img initial={{opacity:0,y:20 ,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-20,scale:0.95}} transition={{duration:0.3}} key={i} src={img} alt='' onClick={() => handleClick(i)} className='media' loading='lazy' />
                            );
                        }
                    })}
                </div>
            </InfiniteScroll>
        </>
    );
}

export default Gallery;

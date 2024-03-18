import React from 'react'
import './Mainvid.css'
function Mainvid(props) {
  return (
    <div className='mainvid bg-white dark:bg-black'>
        <video  controls key={props.currentIndex}  autoPlay>
                <source src={props.videos[props.currentIndex]} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <button className='closepopvid  text-black dark:text-white' onClick={()=>props.closeModal(null)}> X </button>
        
    </div>
  )
}

export default Mainvid
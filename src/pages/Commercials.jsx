import React, { useContext, useEffect } from 'react'
import './styles/Commercials.css'
import Section from '../components/mainSection/Section'
import { GalleryContext } from '../Context/GalleyContext'
import home from '../assets/home_1280x539.webp'
import Gallery from '../components/gallery/Gallery'
import Footer from '../components/Footer/Footer'

function Commercials() {
    const {fetchCommercials,imgCommercials,allDataFetchedCommercials} = useContext(GalleryContext);

    useEffect(()=>{
      fetchCommercials();
    },[])
  return (
    <div className='MainVideo-container bg-white dark:bg-black'>
          <Section img={home} />
          <div className='Commercials text-black dark:text-white text-center my-7 flex flex-col gap-2 items-center justify-center'>
             <h1>Commercials</h1>
             <hr className='w-12 h  h-0.5 bg-black dark:bg-white' />
             <p>Where GoodVibes Meet Great Stories: Your Brand, Our Cinematic Magic.</p>
          </div>
          <Gallery gallery={imgCommercials}  fetchData={fetchCommercials} allDataFetched={allDataFetchedCommercials}  vid={true}/>
         
          
    </div>
  )
}

export default Commercials
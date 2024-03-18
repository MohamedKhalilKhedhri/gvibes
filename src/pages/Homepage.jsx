import React, { useContext , useEffect } from 'react'
import Section from '../components/mainSection/Section'
import Gallery from '../components/gallery/Gallery'
import home from '../assets/home_1280x539.webp'
import './styles/Homepage.css'
import { GalleryContext } from '../Context/GalleyContext'
import Footer from '../components/Footer/Footer'
function Homepage() {
  const { fetchHomePageImages, imgHomePage,allDataFetchedHomePage } = useContext(GalleryContext);

  useEffect(() => {
    fetchHomePageImages(); // Fetch couples images when Homepage component mounts
  }, []);
 
  return (
    <div className='home bg-white dark:bg-black'>
        <Section img={home} />
        <div className='Commercials text-black dark:text-white text-center my-7 flex flex-col gap-2 items-center justify-center'>
             <h1>Home-page</h1>
             <hr className='w-12' />
             <p>Where GoodVibes Meet Great Stories: Your Brand, Our Cinematic Magic.</p>
          </div>
        <Gallery gallery={imgHomePage}  fetchData={fetchHomePageImages} allDataFetched={allDataFetchedHomePage}  vid={false}/>
       
    </div>
  )
}

export default Homepage

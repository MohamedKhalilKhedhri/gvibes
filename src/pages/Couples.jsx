import React, { useContext , useEffect } from 'react'
import Section from '../components/mainSection/Section'
import Gallery from '../components/gallery/Gallery'
import home from '../assets/home_1280x539.webp'
import './styles/Couples.css'
import { GalleryContext } from '../Context/GalleyContext'
import Footer from '../components/Footer/Footer'
function Couples() {
  const { fetchCouples, imgCouples,allDataFetchedCouples } = useContext(GalleryContext);

  useEffect(() => {
    fetchCouples(); // Fetch couples images when Homepage component mounts
  }, []);
 
  return (
    <div className='home bg-white dark:bg-black'>
        <Section img={home} />
        <div className='Commercials text-black dark:text-white text-center  my-7 flex flex-col gap-2 items-center justify-center'>
             <h1>Couples</h1>
             <hr className='w-12' />
             <p>We capture your precious moments with your loved ones.</p>
          </div>
        <Gallery gallery={imgCouples}  fetchData={fetchCouples} allDataFetched={allDataFetchedCouples}  vid={false}/>
       
    </div>
  )
}

export default Couples
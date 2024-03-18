import React, { useContext , useEffect } from 'react'
import Section from '../components/mainSection/Section'
import Gallery from '../components/gallery/Gallery'
import home from '../assets/home_1280x539.webp'
import './styles/Fashion.css'
import { GalleryContext } from '../Context/GalleyContext'

function Products() {
  const { fetchProductsImages, imgProducts,allDataFetchedProducts } = useContext(GalleryContext);

  useEffect(() => {
    fetchProductsImages(); // Fetch couples images when Homepage component mounts
  }, []);
 
  return (
    <div className='home bg-white dark:bg-black'>
        <Section img={home} />
        <div className='Commercials text-black dark:text-white text-center my-7 flex flex-col gap-2 items-center justify-center'>
             <h1>Products</h1>
             <hr className='w-12' />
             <p>Crafting Visual Stories for Remarkable Products</p>
          </div>
        <Gallery gallery={imgProducts}  fetchData={fetchProductsImages} allDataFetched={allDataFetchedProducts}  vid={false}/>
       
    </div>
  )
}

export default Products
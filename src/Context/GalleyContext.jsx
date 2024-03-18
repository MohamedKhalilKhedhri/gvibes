import React, { createContext, useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getStorage , ref,listAll,getDownloadURL} from "firebase/storage";
export const GalleryContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyARMWKJxTUJ-pB-5OolU9uhO5T-Nr-KnkI",
    authDomain: "gvibes-498b2.firebaseapp.com",
    projectId: "gvibes-498b2",
    storageBucket: "gvibes-498b2.appspot.com",
    messagingSenderId: "677147463283",
    appId: "1:677147463283:web:0a9668d36bc22022c2a406",
    measurementId: "G-HJWYSF7XDD"
  };

initializeApp(firebaseConfig);

function GalleryContextProvider(props) {
  const [imgFash, setImgFash] = useState([]);
  const [imgCommercials, setImgCommercials] = useState([]);
  const [imgCouples, setImgCouples] = useState([]);
  const [allDataFetchedFash, setAllDataFetchedFash] = useState(false);
  const [allDataFetchedCommercials, setAllDataFetchedCommercials] = useState(false);
  const [allDataFetchedCouples, setAllDataFetchedCouples] = useState(false);
  const [imgHomePage, setImgHomePage] = useState([]);
  const [allDataFetchedHomePage, setAllDataFetchedHomePage] = useState(false);
  const [imgProducts, setImgProducts] = useState([]);
  const [allDataFetchedProducts, setAllDataFetchedProducts] = useState(false);

  const storage = getStorage();

  const fetchCouples = async () => {
    try {
      const storageRef = ref(storage, 'images/couples');
      const items = await listAll(storageRef);
      
      
      if (items.items.length === imgCouples.length) {
        setAllDataFetchedCouples(true);
        return;
      }
      
      const start = imgCouples.length;
      const end = start + 2;
      const imageUrlsPromise = items.items.slice(start, end).map(async (item) => {
        return await getDownloadURL(item);
      });
      const fetchedImageUrls = await Promise.all(imageUrlsPromise);
      setImgCouples(prevImgCouples => [...prevImgCouples, ...fetchedImageUrls]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchCommercials = async () => {
    try {
      const storageRef = ref(storage, 'images/commercials');
      const items = await listAll(storageRef);
    
      
      if (items.items.length === imgCommercials.length) {
        setAllDataFetchedCommercials(true);
        return;
      }
      
      const start = imgCommercials.length;
      const end = start + 2;
      const imageUrlsPromise = items.items.slice(start, end).map(async (item) => {
        return await getDownloadURL(item);
      });
      const fetchedImageUrls = await Promise.all(imageUrlsPromise);
      setImgCommercials(prevImgCommercials => [...prevImgCommercials, ...fetchedImageUrls]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  
  const fetchFashion = async () => {
    try {
      const storageRef = ref(storage, 'images/fashion');
      const items = await listAll(storageRef);
      
      
      if (items.items.length === imgFash.length) {
        setAllDataFetchedFash(true);
        return;
      }
      
      const start = imgFash.length;
      const end = start + 2;
      const imageUrlsPromise = items.items.slice(start, end).map(async (item) => {
        return await getDownloadURL(item);
      });
      const fetchedImageUrls = await Promise.all(imageUrlsPromise);
      setImgFash(prevImgFash => [...prevImgFash, ...fetchedImageUrls]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  const fetchHomePageImages = async () => {
    try {
      const storageRef = ref(storage, 'images/home-page');
      const items = await listAll(storageRef);

      if (items.items.length === imgHomePage.length) {
        setAllDataFetchedHomePage(true);
        return;
      }

      const start = imgHomePage.length;
      const end = start + 2;
      const imageUrlsPromise = items.items.slice(start, end).map(async (item) => {
        return await getDownloadURL(item);
      });
      const fetchedImageUrls = await Promise.all(imageUrlsPromise);
      setImgHomePage(prevImgHomePage => [...prevImgHomePage, ...fetchedImageUrls]);
    } catch (error) {
      console.error('Error fetching home page images:', error);
    }
  };

  const fetchProductsImages = async () => {
    try {
      const storageRef = ref(storage, 'images/products');
      const items = await listAll(storageRef);

      if (items.items.length === imgProducts.length) {
        setAllDataFetchedProducts(true);
        return;
      }

      const start = imgProducts.length;
      const end = start + 2;
      const imageUrlsPromise = items.items.slice(start, end).map(async (item) => {
        return await getDownloadURL(item);
      });
      const fetchedImageUrls = await Promise.all(imageUrlsPromise);
      setImgProducts(prevImgProducts => [...prevImgProducts, ...fetchedImageUrls]);
    } catch (error) {
      console.error('Error fetching products images:', error);
    }
  };
  const contextValue = {
    fetchFashion,
    imgFash,
    allDataFetchedFash,
    fetchCommercials,
    imgCommercials,
    allDataFetchedCommercials,
    fetchCouples,
    imgCouples,
    allDataFetchedCouples,
    fetchHomePageImages,
    imgHomePage,
    allDataFetchedHomePage,
    fetchProductsImages,
    imgProducts,
    allDataFetchedProducts,
  };

  return (
    <GalleryContext.Provider value={contextValue}>
      {props.children}
    </GalleryContext.Provider>
  );
}
export default GalleryContextProvider;

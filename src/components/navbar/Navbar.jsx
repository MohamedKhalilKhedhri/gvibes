import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/image.webp';
import sun from '../../assets/light.png';
import moon from '../../assets/dark.svg';
import lightmoon from '../../assets/darklight.webp';
import { Link , useLocation } from 'react-router-dom';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve dark mode preference from localStorage or default to false
        return localStorage.getItem('darkMode') === 'true';
    });
    const [scrolled, setScrolled] = useState(false);
    const [navexist, setExist] = useState(false);
    const location = useLocation()
    useEffect(() => {
        // Apply dark mode when component mounts based on localStorage value
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        // Save dark mode preference to localStorage
        localStorage.setItem('darkMode', newMode);
    };

    const toggleNavColor = () => {
        setScrolled(window.scrollY >= 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleNavColor);
        return () => {
            window.removeEventListener('scroll', toggleNavColor);
        };
    }, []);

    const getWindowWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    useEffect(() => {
      // Check the window width when the component mounts
      const handleWindowResize = () => {
          if (window.innerWidth < 1024) {
              setExist(false); // If window width is less than 1024px, set navexist to false
          } else {
              setExist(true);
          }
      };

      handleWindowResize(); // Call the function when the component mounts

      window.addEventListener('resize', handleWindowResize); // Listen for window resize event
      return () => {
          window.removeEventListener('resize', handleWindowResize); // Clean up
      };
  }, []);
  useEffect(() => {
    if (getWindowWidth() < 1024) {
        setExist(false);
    }
}, [location]); // Listen to location changes
    return (
        <>
        
            {navexist ? (
                <div className={`navbar ${isDarkMode ? (getWindowWidth() > 1024 ? (scrolled ? "bg-black text-white" : "bg-transparent text-white") : "bg-black text-white") : (getWindowWidth() > 1024 ? (scrolled ? "bg-white text-black" : "bg-transparent text-white") : "bg-white text-black")}`}>

                    {!isDarkMode ? (getWindowWidth() > 1024 ? (scrolled ? <img src={logo} alt='' /> : <img src={logo2} alt='' />) :<img src={logo} alt='' />) :<img src={logo2} alt='' /> }

                    <ul>
                        <li> <Link className='link' to='/'> <span className="nlogo material-symbols-outlined">home</span> <span className='linktext'>Home</span> </Link> </li>
                        <li> <Link className='link' to='/couples'> <span className="nlogo material-symbols-outlined">favorite</span> <span className='linktext'>Couples</span> </Link> </li>
                        <li> <Link className='link' to='/products'> <span className="nlogo material-symbols-outlined">inventory_2</span> <span className='linktext'>Products</span> </Link> </li>
                        <li> <Link className='link' to='/fashion'> <span className="nlogo material-symbols-outlined">diamond</span> <span className='linktext'>Fashion</span> </Link> </li>
                        <li> <Link className='link' to='/commercials'> <span className="nlogo material-symbols-outlined">videocam</span> <span className='linktext'>Commercials</span> </Link> </li>
                        <li> <Link className='link' to='/contact'> <span className="nlogo material-symbols-outlined">mail</span> <span className='linktext'>Contact Us</span></Link> </li>
                    </ul>
                    <button className='darkbtn' onClick={toggleMode}>{isDarkMode ? <img src={sun} alt='' className='modeimg' /> : (getWindowWidth() > 1024 ? (scrolled ? <img src={moon} alt='' className='modeimg' /> : <img src={lightmoon} alt='' className='modeimg' />):<img src={moon} alt='' className='modeimg' />)}</button>
                    <button className='closenav text:black bg-white dark:bg-black dark:text-white' onClick={() => { setExist(!navexist) }}>X</button>
                </div>
            ) : <button className='closenav text:black  bg-white dark:bg-black dark:text-white' onClick={() => { setExist(!navexist) }}><span className="material-symbols-outlined">menu</span></button>}
        </>
    );
}

export default Navbar;

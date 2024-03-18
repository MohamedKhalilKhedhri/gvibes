import React from 'react'
import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Preloader from './components/PreLoader/Preloader'
import Footer from './components/Footer/Footer'
const LazyHome = React.lazy(()=>import('./pages/Homepage'))
const LazyCommercials = React.lazy(()=>import('./pages/Commercials'))
const LazyContact = React.lazy(()=>import('./pages/ContactUs'))
const LazyCouples = React.lazy(()=>import('./pages/Couples'))
const LazyProducts = React.lazy(()=>import('./pages/Products'))
const LazyFashion = React.lazy(()=>import('./pages/Fashion'))



function App() {
 

  return (
    <>
  
    <BrowserRouter>
      
        <Navbar />
      
  
     <Routes>
        <Route path='' element={<React.Suspense fallback={<Preloader />}><LazyHome/></React.Suspense>} />
        <Route path='/commercials' element={  <React.Suspense fallback={<Preloader />}><LazyCommercials/></React.Suspense>} />
        <Route path='/contact' element={<React.Suspense fallback={<Preloader />}><LazyContact/></React.Suspense>} />
        <Route path='/couples' element={<React.Suspense fallback={<Preloader />}><LazyCouples/></React.Suspense>} />
        <Route path='/products' element={<React.Suspense fallback={<Preloader />}><LazyProducts/></React.Suspense>} />
        <Route path='/fashion' element={<React.Suspense fallback={<Preloader />}><LazyFashion/></React.Suspense>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

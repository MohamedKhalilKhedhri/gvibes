import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GalleryContextProvider from './Context/GalleyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GalleryContextProvider>
    <App />
  </GalleryContextProvider>,
)

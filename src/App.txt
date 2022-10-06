import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./components/pages/home/Home"
import Housing from "./components/pages/housing/Housing"
import About from "./components/pages/about/About"
import ErrorPage from './components/pages/error-pages/Error-page'


export default function App() {

<BrowserRouter> 
    <Routes>
      <Route path='/' element={<Home />}  /> 
      <Route path='/housings/:housingId' element={<Housing />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/error' element={<ErrorPage />} />
    </Routes>
</BrowserRouter>

}







